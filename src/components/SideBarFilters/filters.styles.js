import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '230px',
        [theme.breakpoints.up('md')]: {
            marginRight: '12px'
        }
    },
    filterSection: {
        minHeight: '50px',
        marginBottom: '16px',
        padding: '16px',
        '& .MuiTypography-body1': {
            fontSize: '14px',
            lineHeight: '1.2'
        },
        '& .MuiCheckbox-colorPrimary.Mui-checked': {
            color: '#1f232a'
        },
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