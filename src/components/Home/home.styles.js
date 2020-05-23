import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    loadingSign: {
        textAlign: 'center',
        width: '100%',
        marginTop: '50px',
        '& .MuiCircularProgress-colorPrimary': {
            color: '#1f232a'
        }
    },
    bodyContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '80px',
        [theme.breakpoints.up('md')]: {
            padding: '0 12px',
        }
    },
    searchSortFilterContainer: {
        padding: '0 0 20px 0',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        [theme.breakpoints.up('md')]: {
            justifyContent: 'space-between',
            flexWrap: 'unset',
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
        height: "50px",
        margin: "24px auto",
    },
    filtersContainer: {
        width: '200px'
    },
    paginationContainer: {
        padding: '20px 0',
        display: 'flex',
        justifyContent: 'center',
        '& .MuiPaginationItem-textPrimary.Mui-selected': {
            backgroundColor: '#1f232a'
        }
    },
    footer: {
        height: "200px",
        margin: "24px auto",
    }
  }));

  export default useStyles;