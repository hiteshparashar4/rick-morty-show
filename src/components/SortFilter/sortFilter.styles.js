import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        fontWeight: 'bold',
        fontSize: '22px',
        '& .MuiFormControl-root': {
            width: '200px'
        }
    }
  }));

  export default useStyles;