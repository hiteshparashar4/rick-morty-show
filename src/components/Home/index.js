import React, { useEffect, useState } from "react";
import CharacterList from "../CharacterList";
import fetchData from "../../services/fetchService";
import Pagination from "@material-ui/lab/Pagination";
import Hidden from "@material-ui/core/Hidden";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from "./home.styles";

function RickMortyShow() {
  const classes = useStyles();
  const [state, updateState] = useState({
    isLoading: true,
    error: false,
    info: {},
    characters: [],
  });

  useEffect(() => {
    fetchData(updateState, 1);
  }, []);

  const onPageChange = (e, p) => {
    fetchData(updateState, p);
  };

  console.log(state);
  const { characters, isLoading, page, info } = state;
  const { pages } = info;

  return (
    <>
      <div className={classes.header}>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Hidden mdDown>
          <Paper style={{ width: "200px" }}>mdDown</Paper>
        </Hidden>

        <div style={{ maxWidth: "1000px" }}>
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
              <CharacterList page={page} characters={characters} />
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
