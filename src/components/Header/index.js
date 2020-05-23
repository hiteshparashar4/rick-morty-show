import React from "react";
import useStyles from "./header.styles";
import ham from '../../../assets/ham.png';

function Header(props) {
  const classes = useStyles();
  const { toggleFlyout } = props;

  return (
    <div className={classes.root}>
        <div className={classes.headerBody}>
            <div onClick={toggleFlyout} className={classes.icon}>
                <img src={ham} />
            </div>
        </div>
    </div>
  );
}

export default Header;
