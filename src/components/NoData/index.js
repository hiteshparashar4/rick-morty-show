import React from 'react';
import useStyles from './noData.styles';

export default function NoData(props) {
  const classes = useStyles();
  const message = props.message || 'No Data Available';
  return (
    <div className={classes.root}>
        {message}
    </div>
  );
}