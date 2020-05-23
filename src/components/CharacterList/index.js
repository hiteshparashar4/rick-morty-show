import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from './characterList.styles';
import { getCreatedTimeString } from '../../utils/helpers';

export default function CharacterList(props) {
  const classes = useStyles();

  const { characters } = props;
  
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {
            characters.map(item => {
                const { id, created, image, name, status, species, gender, origin, visible  } = item;

                if(!visible) return null;
                
                const elapsedTime = getCreatedTimeString(created);

                return <Grid item xs={6} sm={4} md={3} key={id} className={classes.gridItem}>
                        <Paper elevation={3} className={classes.paper}>
                            <div className={classes.imgContainer}>
                                <img src={image} width={'100%'} height={'auto'}/>
                                <div className={classes.imageDescription}>
                                    <span className={classes.name}>{name}</span>
                                    <span className={classes.id}>{`id: ${id} - ${elapsedTime}`}</span>
                                </div>
                            </div>
                            <div className={classes.charDescription}>
                                <div className={classes.charDetail}>
                                    <span>STATUS</span>
                                    <span className={classes.textAlignRight}>{status}</span>
                                    
                                </div>
                                <div className={classes.charDetail}>
                                    <span>SPECIES</span>
                                    <span className={classes.textAlignRight}>{species}</span>
                                    
                                </div>
                                <div className={classes.charDetail}>
                                    <span>GENDER</span>
                                    <span className={classes.textAlignRight}>{gender}</span>
                                    
                                </div>
                                <div className={classes.charDetail} style={{border: 'none'}}>
                                    <span>ORIGIN</span>
                                    <span className={classes.textAlignRight}>{origin.name}</span>
                                    
                                </div>
                            </div>
                        </Paper>
                    </Grid>
            })
        }
      </Grid>
    </div>
  );
}