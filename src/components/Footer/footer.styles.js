import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        
    },
    divider: {
        width: '100%',
        height: '100px',
        margin: 'auto',
        opacity: '0.2'
    },
    container: {
        padding: '50px 12px 12px 12px',
        backgroundColor: '#fafafa',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
    },
    itemContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    footerItem: {
        width: '500px',
        boxSizing: 'border-box',
        marginBottom: '20px',
        padding: '12px',
        textAlign: 'center',
        '& h2': {
            padding: '10px 0',
            fontSize: '0.85rem'
        },
        '& p': {
            letterSpacing: 0.75,
            textAlign: 'justify',
            lineHeight: '1.5',
            fontSize: '0.7rem'
        },
        '& img': {
            width: '25px',
            height: 'auto',
            paddingRight: '10px'
        },
        '& div': {
            display: 'flex',
            alignItems: 'center',
            padding: '10px 0',
            fontSize: '0.75rem'
        },
        '& a': {
            textDecoration: 'none',
            color: 'rgba(0, 0, 0, 0.87)',
            '&:hover': {
                color: 'purple'
            }
        },
        '& span': {
            fontWeight: 'bold',
        },
        [theme.breakpoints.up('lg')]: {
            textAlign: 'unset',
        }
    },
    note: {
        textAlign: 'center',
        fontSize: '8px'
    }
  }));

  export default useStyles;