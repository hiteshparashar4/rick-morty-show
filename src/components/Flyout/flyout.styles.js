import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    zIndex: 10,
    top: 0,
    left: 0,
    height: "100%",
    width: 0,
    transition: "0.2s",
    background: "#fafafa",
    overflow: "scroll",
  },
  closeIcon: {
    position: "relative",
    top: 0,
    left: "12px",
    fontSize: "45px",
    textDecoration: "none",
    color: "#1f232a",
    textAlign: "right",
    background: "transparent",
    border: "none",
    outline: "none",
  },
  flyItOut: {
    width: "260px"
  },
  childrenContainer: {
      padding: '12px'
  }
});

export default useStyles;
