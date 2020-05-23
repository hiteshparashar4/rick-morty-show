import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        fontWeight: 'bold',
        fontSize: '22px',
        '& .MuiFormControl-root': {
            width: '200px',
            '& .Mui-focused': {
                color: '#1f232a'
            }
        },
        '& .MuiInput-underline:after': {
            borderBottom: '2px solid #1f232a'
        }
    }
  }));

  export default useStyles;