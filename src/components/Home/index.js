import React, { useEffect, useState } from "react";
import CharacterList from "../CharacterList";
import fetchData from "../../services/fetchService";
import Pagination from "@material-ui/lab/Pagination";
import Hidden from "@material-ui/core/Hidden";
import CircularProgress from "@material-ui/core/CircularProgress";
import Filters from '../Filters';
import useStyles from "./home.styles";
import remove from 'lodash/remove';

function RickMortyShow() {
  const classes = useStyles();
  const [state, updateState] = useState({
    isLoading: true,
    error: false,
    info: {},
    characters: [],
    filters: [
    ],
    selectedFilters: []
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

  console.log(state);
  const { characters, isLoading, page, info, filters, selectedFilters } = state;
  const { pages } = info;

  return (
    <>
      <div className={classes.header}>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Hidden mdDown>
            <Filters filters={filters} selectedFilters={selectedFilters} handleFilterChange={handleFilterChange} />
        </Hidden>

        <div className={classes.mainContainer}>
          {isLoading ? (
            <CircularProgress />
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
              <CharacterList page={page} characters={characters} selectedFilters={selectedFilters} />
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
