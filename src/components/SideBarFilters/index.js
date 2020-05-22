import React from "react";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import useStyles from "./filters.styles";

export default function Filters(props) {
  const classes = useStyles();
  const { isLoading, filters, selectedFilters, handleFilterChange } = props;

  const getSubStr = (str) => {
    const sub = str.length > 18 ? `${str.substring(0, 18)}...` : str;
    return sub;
  };

  return (
    <div className={classes.root}>
      {
        filters.map((filter) => {
          const { name, filterItems } = filter;
          return (
            <Paper className={classes.filterSection} key={name}>
              <span className={classes.filterTitle}>{name}</span>
              {filterItems.map((item) => {
                const checked = selectedFilters.includes( `${name}__${item}`);
                return (
                  !isLoading && <div key={item} title={item}>
                    <FormControlLabel
                      control={
                        <Checkbox checked={checked} name={item} color="primary" onChange={(e) => {
                          handleFilterChange(name, item, e.target.checked)
                        }} />
                      }
                      label={getSubStr(item)}
                    />
                  </div>
                );
              })
            }
          </Paper>
        );
      })}
    </div>
  );
}
