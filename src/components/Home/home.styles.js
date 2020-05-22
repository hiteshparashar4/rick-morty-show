import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    loadingSign: {
        textAlign: 'center',
        width: '100%',
        marginTop: '50px'
    },
    bodyContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 12px'
    },
    searchSortFilterContainer: {
        padding: '0 0 20px 0',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        [theme.breakpoints.up('lg')]: {
            justifyContent: 'space-between',
            flexWrap: 'no-wrap',
        }
    },
    mainContainer: {
        minHeight: '700px',
        width: '100%',
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