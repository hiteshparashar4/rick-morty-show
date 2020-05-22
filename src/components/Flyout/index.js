import React from "react";
import useStyles from "./flyout.styles";
import clsx from "clsx";

const Flyout = (props) => {
  const classes = useStyles();
  const { children, showFlyout, toggleFlyout } = props;

  return (
    <div className={clsx(classes.root, { [classes.flyItOut]: showFlyout })}>
      <div>
        <button
          type="button"
          className={classes.closeIcon}
          onClick={toggleFlyout}
        >
          &times;
        </button>
      </div>

      <div className={classes.childrenContainer}>{children}</div>
    </div>
  );
};

export default Flyout;
