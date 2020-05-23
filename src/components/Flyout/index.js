import React, { useRef } from "react";
import useStyles from "./flyout.styles";
import clsx from "clsx";

const Flyout = (props) => {
  const { children, showFlyout, toggleFlyout } = props;
  const rootContainer = useRef(null);
  let bodyHeight = 300;

  if(rootContainer !== null && rootContainer.current) {
    bodyHeight = rootContainer.current.clientHeight - 52;
  }

  const classes = useStyles(bodyHeight);

  return (
    <div ref={rootContainer}  className={clsx(classes.root, { [classes.flyItOut]: showFlyout })}>
      <div className={clsx(classes.header, { [classes.showHeader]: showFlyout })}>
        <button
          type="button"
          className={classes.closeIcon}
          onClick={toggleFlyout}
        >
          &times;
        </button>
      </div>

      <div className={clsx(classes.childrenContainer, { [classes.showChildrenContainer]: showFlyout })}>{children}</div>
    </div>
  );
};

export default Flyout;
