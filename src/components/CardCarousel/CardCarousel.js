import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 240,
    },
  });

const CardCarousel = ({srcImage}) => {

    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={srcImage}
                    title="Contemplative Reptile"
                    />
                </CardActionArea>
                <CardActions>
                    <Grid container>
                        <Button variant="contained" size="medium" color="primary" style={{ width: '100%'}}>
                            Ver
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
        </div>
    )
}

export default CardCarousel
