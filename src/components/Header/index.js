import React from "react";
import useStyles from "./header.styles";
import ham from '../../../assets/ham.png';

function Header(props) {
  const classes = useStyles();
  const { toggleFlyout } = props;

  return (
    <div className={classes.root}>
        <div className={classes.headerBody}>
            <span onClick={toggleFlyout} className={classes.icon}>
                <img src={ham} />
            </span>
        </div>
    </div>
  );
}

export default Header;
