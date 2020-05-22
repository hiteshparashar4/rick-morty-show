import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        
    },
    headerBody: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 5,
        height: '50px',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        padding: '12px',
        backgroundColor: '#000000',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
        '& img': {
            width: '25px',
            height: 'auto'
        }
    },
    icon: {
    }
  }));

  export default useStyles;