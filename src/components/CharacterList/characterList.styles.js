import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    gridItem: {
      transition: 'transform .5s',
      '&:hover': {
          transform: 'scale3d(1.05, 1.05, 1)'
      }
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      '&:hover': {
          boxShadow: '6px 7px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)'
      }
    },
    imgContainer: {
        position: 'relative'
    },
    imageDescription: {
      position: 'absolute',
      height: '25%',
      width: '100%',
      bottom: 0,
      backgroundColor: '#000',
      opacity: '0.7',
      padding: '5px',
      color: '#fafafa',
      textAlign: 'left',
    },
    charTitle: {
    },
    charSubTitle: {
  
    },
    charDescription: {
    }
  }));

  export default useStyles;