import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
        width: '230px'
    },
    filterSection: {
        minHeight: '50px',
        marginBottom: '16px',
        padding: '16px',
        '& .MuiTypography-body1': {
            fontSize: '14px',
            lineHeight: '1.2'
        }
    },
    filterTitle: {
        fontWeight: 'bold',
        fontSize: '1.2rem',
        display: 'block',
        height: '42px',
        textTransform: 'capitalize'
    }
  }));

  export default useStyles;