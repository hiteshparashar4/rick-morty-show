import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './searchFilter.styles';

export default function SearchFilter(props) {
  const classes = useStyles();
  const { searchText, handleSearchChange } = props;

  return (
    <div className={classes.root}>
        <TextField id="search-text" label="Search By Name" value={searchText}  onChange={handleSearchChange} />
    </div>
  );
}