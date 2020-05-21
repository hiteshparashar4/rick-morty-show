import React, { useEffect, useState } from "react";
import CharacterList from "../CharacterList";
import fetchData from "../../services/fetchService";
import Pagination from "@material-ui/lab/Pagination";
import Hidden from "@material-ui/core/Hidden";
import CircularProgress from "@material-ui/core/CircularProgress";
import SideBarFilters from '../SideBarFilters';
import SearchFilter from '../SearchFilter';
import SortFilter from '../SortFilter';
import useStyles from "./home.styles";
import remove from 'lodash/remove';
import orderBy from 'lodash/orderBy';
import cloneDeep from 'lodash/cloneDeep';
import NoData from '../NoData';

function RickMortyShow() {
  const classes = useStyles();
  const [state, updateState] = useState({
    isLoading: true,
    error: false,
    info: {},
    characters: [],
    filters: [
    ],
    selectedFilters: [],
    searchText: '',
    sortOrder: 'asc'
  });

  useEffect(() => {
    fetchData(updateState, 1);
  }, []);

  const onPageChange = (e, p) => {
    fetchData(updateState, p);
  };

  const handleFilterChange = (type, filterKey, checked) => {
    const { selectedFilters, characters } = state;
    const filterItem = `${type}__${filterKey}`;

    if(checked) {
      selectedFilters.push(filterItem);
    } else {
      remove(selectedFilters, i => {
        return i === filterItem
      });
    }

    const newCharacters = characters.map(char => {
      const charTypeValue = type === 'origin' ? char[type].name : char[type];

      if(checked) {
        if(charTypeValue === filterKey) {
          char.visible = true
        }
      } else {
        if(charTypeValue === filterKey) {
          char.visible = false
        }
      }

      return char;
    });

    updateState({
      ...state,
      selectedFilters: selectedFilters,
      characters: newCharacters
    });
  };

  const handleSearchChange = e => {
    const { characters } = state;
    const searchText = e.target.value.trim().toLowerCase();

    const newChars = characters.map(item => {
      if(item.name.toLowerCase().includes(searchText)) {
        item.visible = true;
      } else {
        item.visible = false;
      }
      
      return item;
    })

    updateState({
      ...state,
      characters: newChars,
      searchText: searchText
    })
  };

  const onSortChange = e => {
    const order = e.target.value;
    const characters =  cloneDeep(state.characters);
    const sorted = orderBy(characters, ['name'], [order]);

    updateState({
      ...state,
      characters: sorted,
      sortOrder: order
    })
  }

  console.log(state);
  const { characters, isLoading, page, info, filters, selectedFilters, searchText, sortOrder } = state;
  const { pages } = info;
  const visibleCount = characters.filter(char => char.visible === true).length;

  return (
    <>
      <div className={classes.header}>
      </div>
      <div className={classes.bodyContainer}>
        <Hidden mdDown>
            <SideBarFilters filters={filters} selectedFilters={selectedFilters} handleFilterChange={handleFilterChange} />
        </Hidden>

        <div className={classes.mainContainer}>
          {isLoading ? (
            <div className={classes.loadingSign}>
                <CircularProgress />
            </div>
          ) : (
            <div>
              <div className={classes.paginationContainer}>
                <Pagination
                  page={page}
                  count={pages}
                  color="primary"
                  onChange={onPageChange}
                />
              </div>
              <div className={classes.searchSortFilterContainer}>
                  <SearchFilter handleSearchChange={handleSearchChange} searchText={searchText} />
                  <SortFilter onSortChange={onSortChange} sortOrder={sortOrder} />
              </div>
              {
                visibleCount > 0 ? <CharacterList page={page} characters={characters} selectedFilters={selectedFilters} />
                : <NoData />
              }
              
            </div>
          )}
        </div>
      </div>
      <div className={classes.footer}>
      </div>
    </>
  );
}

export default RickMortyShow;
