import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import useStyles from './sortFilter.styles';

export default function SortFilter(props) {
    const classes = useStyles();
  const { sortOrder, onSortChange } = props;

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Sort by ID</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortOrder || 'asc'}
          onChange={onSortChange}
        >
          <MenuItem value={'asc'}>Ascending</MenuItem>
          <MenuItem value={'desc'}>Decending</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
