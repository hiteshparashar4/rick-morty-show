import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import useStyles from './characterList.styles';

export default function CharacterList(props) {
  const classes = useStyles();

  const { characters } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {
            characters.map(item => {
                const { id, image, name  } = item;

                return <Grid item xs={6} sm={6} md={3} key={id} className={classes.gridItem}>
                        <Paper elevation={3} className={classes.paper}>
                            <div className={classes.imgContainer}>
                                <img src={image} width={'100%'} height={'auto'}/>
                                <div className={classes.imageDescription}>
                                    <span>{name}</span>
                                    <span>{`id: ${id}`}</span>
                                </div>
                            </div>
                            <div className={classes.charDescription}>
                                
                            </div>
                        </Paper>
                    </Grid>
            })
        }
      </Grid>
    </div>
  );
}