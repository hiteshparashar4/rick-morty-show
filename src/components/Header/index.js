import React from "react";
import useStyles from "./header.styles";
import ham from '../../../assets/ham.png';

function Header(props) {
  const classes = useStyles();
  const { onMenuIconClick } = props;

  return (
    <div className={classes.root}>
        <div className={classes.headerBody}>
            <div onClick={onMenuIconClick} className={classes.icon}>
                <img src={ham} />
            </div>
        </div>
    </div>
  );
}

export default Header;
