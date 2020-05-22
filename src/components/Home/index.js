import React from "react";
import CharacterList from "../CharacterList";
import Pagination from "@material-ui/lab/Pagination";
import Hidden from "@material-ui/core/Hidden";
import CircularProgress from "@material-ui/core/CircularProgress";
import SideBarFilters from "../SideBarFilters";
import SearchFilter from "../SearchFilter";
import SortFilter from "../SortFilter";
import useStyles from "./home.styles";
import NoData from "../NoData";
import { connectState } from './connectState'

function RickMortyShow(props) {
  const classes = useStyles();
  const { page, info, filters, selectedFilters, searchText, sortOrder } = props;
  const { pages } = info;
  const { handleFilterChange, onPageChange, handleSearchChange, onSortChange } = props;
  
  const getCharacterList = () => {
    const { isLoading, characters, page, searchedChars } = props;
    let containsData = true;

    if ((characters.filter((char) => char.visible === true).length === 0) ||
      (searchText.length > 0 && searchedChars.length === 0)) {
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

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default connectState(RickMortyShow);
