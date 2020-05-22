import React, { useEffect, useState } from "react";
import CharacterList from "../CharacterList";
import fetchData from "../../services/fetchService";
import Pagination from "@material-ui/lab/Pagination";
import Hidden from "@material-ui/core/Hidden";
import CircularProgress from "@material-ui/core/CircularProgress";
import SideBarFilters from "../SideBarFilters";
import SearchFilter from "../SearchFilter";
import SortFilter from "../SortFilter";
import useStyles from "./home.styles";
import orderBy from "lodash/orderBy";
import cloneDeep from "lodash/cloneDeep";
import NoData from "../NoData";
import {
  getSideBarFilterResults,
  getSearchFilterResult,
  getDefaultState,
} from "../../utils/helpers";

function RickMortyShow() {
  const classes = useStyles();
  const [state, setState] = useState(getDefaultState());

  useEffect(() => {
    fetchData(setState, 1);
  }, []);

  useEffect(() => {
    fetchData(setState, state.page);
  }, [state.page]);

  const onPageChange = (e, p) => {
    setState({
      ...state,
      isLoading: true,
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

  const handleSearchChange = (e) => {
    const characters = cloneDeep(state.characters);
    const searchText = e.target.value.trim().toLowerCase();

    const result = getSearchFilterResult(characters, searchText);

    setState({
      ...state,
      searchedChars: result.searchedChars,
      searchText: searchText,
    });
  };

  const onSortChange = (e) => {
    const order = e.target.value;
    const characters = cloneDeep(state.characters);
    const sorted = orderBy(characters, ["name"], [order]);

    setState({
      ...state,
      characters: sorted,
      sortOrder: order,
    });
  };

  const getCharacterList = () => {
    const { isLoading, characters, page, searchedChars } = state;
    let containsData = true;

    if (
      characters.filter((char) => char.visible === true).length === 0 ||
      (searchText.length > 0 && searchedChars.length === 0)
    ) {
      containsData = false;
    }

    if (isLoading) {
      return (
        <div className={classes.loadingSign}>
          <CircularProgress />
        </div>
      );
    } else if (containsData) {
      return (
        <CharacterList
          page={page}
          characters={searchText.length > 0 ? searchedChars : characters}
          selectedFilters={selectedFilters}
        />
      );
    } else {
      return <NoData />;
    }
  };

  console.log(state);
  const { page, info, filters, selectedFilters, searchText, sortOrder } = state;
  const { pages } = info;

  return (
    <>
      <div className={classes.header}></div>
      <div className={classes.bodyContainer}>
        <Hidden mdDown>
          <SideBarFilters
            filters={filters}
            selectedFilters={selectedFilters}
            handleFilterChange={handleFilterChange}
          />
        </Hidden>
        <div className={classes.mainContainer}>
          <div className={classes.paginationContainer}>
            <Pagination
              page={page}
              count={pages}
              color="primary"
              onChange={onPageChange}
            />
          </div>
          <div className={classes.searchSortFilterContainer}>
            <SearchFilter
              handleSearchChange={handleSearchChange}
              searchText={searchText}
            />
            <SortFilter onSortChange={onSortChange} sortOrder={sortOrder} />
          </div>
          {getCharacterList()}
        </div>
      </div>
      <div className={classes.footer}></div>
    </>
  );
}

export default RickMortyShow;
