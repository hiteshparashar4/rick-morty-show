import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        fontWeight: 'bold',
        fontSize: '22px',
        marginBottom: '16px',
        [theme.breakpoints.up('lg')]: {
            marginBottom: 0
        }
    }
  }));

  export default useStyles;