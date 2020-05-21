import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    mainContainer: {
        minHeight: '700px',
        [theme.breakpoints.up('lg')]: {
            maxWidth: '1000px',
        }
    },
    header: {
        height: "200px",
        margin: "24px auto",
    },
    filtersContainer: {
        width: '200px'
    },
    paginationContainer: {
        padding: '20px 0'
    },
    footer: {
        height: "200px",
        margin: "24px auto",
    }
  }));

  export default useStyles;