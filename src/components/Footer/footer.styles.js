import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        
    },
    divider: {
        width: '80%',
        height: '100px',
        margin: 'auto',
        borderBottom: '1px solid black',
        opacity: '0.2'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: '50px 12px 50px 12px'
    },
    footerItem: {
        width: '500px',
        boxSizing: 'border-box',
        marginBottom: '20px',
        padding: '12px',
        textAlign: 'center',
        '& h2': {
            padding: '10px 0',
            fontSize: '1.5rem'
        },
        '& p': {
            letterSpacing: 0.75,
            textAlign: 'justify',
            lineHeight: '1.5',
            fontSize: '13px'
        },
        '& img': {
            width: '45px',
            height: 'auto',
            paddingRight: '10px'
        },
        '& div': {
            display: 'flex',
            alignItems: 'center',
            padding: '10px 0'
        },
        [theme.breakpoints.up('lg')]: {
            textAlign: 'unset',
        }
    }
  }));

  export default useStyles;