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

function RickMortyShow() {
  const classes = useStyles();
  const [state, updateState] = useState({
    isLoading: true,
    error: false,
    info: {},
    page: 1,
    characters: [],
    searchedChars: [],
    filters: [],
    selectedFilters: [],
    searchText: "",
    sortOrder: "asc",
  });

  useEffect(() => {
    fetchData(updateState, 1);
  }, []);

  useEffect(() => {
    fetchData(updateState, state.page);
  }, [state.page]);

  const onPageChange = (e, p) => {
    updateState({
      ...state,
      isLoading: true,
      page: p,
    });
  };

  const handleFilterChange = (type, filterKey, checked) => {
    const { characters, searchText } = state;
    const selectedFilters = [];

    const newCharacters = characters.map((char) => {
      const typeValue = type === "origin" ? char[type].name : char[type];
      if (typeValue === filterKey) {
        char.visible = checked;
      }

      if (char.visible === true) {
        const speciesFilter = `species__${char.species}`;
        const genderFilter = `gender__${char.gender}`;
        const originFilter = `origin__${char.origin.name}`;

        if (!selectedFilters.includes(speciesFilter))
          selectedFilters.push(speciesFilter);
        if (!selectedFilters.includes(genderFilter))
          selectedFilters.push(genderFilter);
        if (!selectedFilters.includes(originFilter))
          selectedFilters.push(originFilter);
      }
      return char;
    });

    const searchedChars = newCharacters.filter((item) => {
      if (
        item.visible === true &&
        item.name.toLowerCase().includes(searchText)
      ) {
        return true;
      }
      return false;
    });

    updateState({
      ...state,
      selectedFilters: selectedFilters,
      characters: newCharacters,
      searchedChars: searchedChars,
    });
  };

  const handleSearchChange = (e) => {
    const searchedChars = cloneDeep(state.characters);
    const searchText = e.target.value.trim().toLowerCase();

    const chars = searchedChars.filter((item) => {
      if (
        item.visible === true &&
        item.name.toLowerCase().includes(searchText)
      ) {
        return true;
      }
      return false;
    });

    updateState({
      ...state,
      searchedChars: chars,
      searchText: searchText,
    });
  };

  const onSortChange = (e) => {
    const order = e.target.value;
    const characters = cloneDeep(state.characters);
    const sorted = orderBy(characters, ["name"], [order]);

    updateState({
      ...state,
      characters: sorted,
      sortOrder: order,
    });
  };

  console.log(state);
  const {
    characters,
    searchedChars,
    isLoading,
    page,
    info,
    filters,
    selectedFilters,
    searchText,
    sortOrder,
  } = state;
  const { pages } = info;

  let containsData = true;
  if (characters.filter((char) => char.visible === true).length === 0) {
    containsData = false;
  }
  if (searchText.length > 0 && searchedChars.length === 0) {
    containsData = false;
  }

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
        {isLoading ? (
          <div className={classes.loadingSign}>
            <CircularProgress />
          </div>
        ) : (
          <div className={classes.mainContainer}>
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
                <SearchFilter
                  handleSearchChange={handleSearchChange}
                  searchText={searchText}
                />
                <SortFilter onSortChange={onSortChange} sortOrder={sortOrder} />
              </div>
              {containsData > 0 ? (
                <CharacterList
                  page={page}
                  characters={
                    searchText.length > 0 ? searchedChars : characters
                  }
                  selectedFilters={selectedFilters}
                />
              ) : (
                <NoData />
              )}
            </div>
          </div>
        )}
      </div>
      <div className={classes.footer}></div>
    </>
  );
}

export default RickMortyShow;
