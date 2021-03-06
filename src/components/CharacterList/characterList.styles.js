import { makeStyles } from '@material-ui/core/styles';
import background from '../../../assets/dummy.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#1f232a',
      padding: '15px'
    },
    gridItem: {
      transition: 'transform .5s',
      [theme.breakpoints.up('md')]: {
        '&:hover': {
          transform: 'scale3d(1.05, 1.05, 1)'
        }
      }
    },
    paper: {
      textAlign: 'left',
      color: theme.palette.text.secondary,
      '&:hover': {
          // boxShadow: '6px 7px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)'
      }
    },
    imgContainer: {
        position: 'relative',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        minHeight: '150px'
    },
    imageDescription: {
      position: 'absolute',
      minHeight: '25%',
      width: '100%',
      bottom: 0,
      backgroundColor: '#000',
      opacity: '0.7',
      padding: '5px',
      color: '#fafafa',
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      '& .MuiPaper-root': {
        backgroundColor: '#333333'
      },
      '& span': {
        display: 'block'
      }
    },
    name: {
      fontSize: '16px',
    },
    id: {
      fontWeight: 200,
      fontSize: '10px'
    },
    charTitle: {
    },
    charSubTitle: {
  
    },
    charDescription: {
      padding: '15px',
      backgroundColor: '#333333',
      color: '#a2a0a0',
      fontWeight: 'bold'
    },
    charDetail: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 0 3px 0',
      fontSize: '0.7rem',
      borderBottom: '0.5px solid #564f4f',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.55rem'
      }
    },
    textAlignRight: {
      textAlign: 'right',
      color: '#c5914c'
    }
  }));

  export default useStyles;