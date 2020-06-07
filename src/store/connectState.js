import React, { useEffect, useRef, useState } from "react";
import orderBy from "lodash/orderBy";
import cloneDeep from "lodash/cloneDeep";
import debounce from "lodash/debounce";
import fetchData from "../services/fetchService";
import {
  getSideBarFilterResults,
  getSearchFilterResult,
  getStateObj
} from "../utils/helpers.js";
import { getDefaultState } from "../utils/constants";

const initialPage = 1;

export const connectState = Component => {
  const withState = props => {
    const [state, setState] = useState(getDefaultState());

    const usePrevious = (value) => {
      const ref = useRef();
      useEffect(() => {
        ref.current = value;
      }, [value]); 
    
      return ref.current;
    }

    const prevCount = usePrevious(state.page);

    const getData = (page) => {
      fetchData(page).then(response => {
        const result = getStateObj(response)
        setState({
          ...result,
          page: page
        });
      })
      .catch(() => {
        const defaultState = getDefaultState();
        setState({
          ...defaultState,
          isLoading: false,
          error: true
        });
      });
    }

    useEffect(() => {
      getData(initialPage);
    }, []);

    useEffect(() => {
      if(prevCount && prevCount !== state.page) {
        setState({
          ...state,
          isLoading: true
        });
        getData(state.page);
      }
    }, [state.page]);

    const onPageChange = (e, p) => {
      setState({
        ...state,
        page: p,
      });
    };

    const handleFilterChange = (type, filterKey, checked) => {
      const { characters, searchText } = state;

      const result = getSideBarFilterResults(
        characters,
        type,
        filterKey,
        checked,
        searchText
      );

      setState({
        ...state,
        selectedFilters: result.selectedFilters,
        characters: result.characters,
        searchedChars: result.searchedChars,
      });
    };

    const handleSearchChange = e => {
      const characters = cloneDeep(state.characters);
      const searchText = e.target.value.trim().toLowerCase();

      const result = getSearchFilterResult(characters, searchText);

      setState({
        ...state,
        searchedChars: result.searchedChars,
        searchText: searchText,
      });
    };

    const onSortChange = e => {
      const order = e.target.value;
      const characters = cloneDeep(state.characters);
      const sorted = orderBy(characters, ["id"], [order]);

      setState({
        ...state,
        characters: sorted,
        sortOrder: order,
      });
    };

    return (
      <Component
        {...props}
        {...state}
        onPageChange={debounce(onPageChange, 200)}
        handleFilterChange={handleFilterChange}
        handleSearchChange={handleSearchChange}
        onSortChange={onSortChange}
      />
    );
  };

  return withState;
};
