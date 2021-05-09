import React from 'react';
import './Home.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import StoreImg from '../../assets/images/App-Store.jpg';

const useStyles = makeStyles({
    root: {
    maxWidth: 345,
    },
    media: {
    height: 140,
    },
});

const Home = () => {

    const classes = useStyles();

    return (
        <div className='container-home'>
            <HeroSection/>
            <div className='info'>
                <h2 className='title-home'>Bienvenid@!!</h2>
                <div className='sale-container'>
                    <h2><u>OFERTAS DESTACADAS</u></h2>
                    <Grid container spacing={3} style={{padding: '25px 15px'}}>
                        <Grid item xs={12} md={4}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image={StoreImg}
                                    title="Producto 1"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Producto 1
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Descripción del producto
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6}>
                                            <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                Comprar
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                Detalles
                                            </Button>
                                        </Grid>                                      
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image={StoreImg}
                                    title="Producto 2"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Producto 2
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Descripción del producto
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6}>
                                            <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                Comprar
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                Detalles
                                            </Button>
                                        </Grid>                                      
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image={StoreImg}
                                    title="Producto 3"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Producto 3
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Descripción del producto
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6}>
                                            <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                Comprar
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                Detalles
                                            </Button>
                                        </Grid>                                      
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                    <h2><u>PRODUCTOS DESTACADOS</u></h2>
                    <Grid container spacing={3} style={{padding: '25px 15px'}}>
                        <Grid item xs={12} md={4} >
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image={StoreImg}
                                    title="Producto 1"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Producto 1
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Descripción del producto
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6}>
                                            <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                Comprar
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                Detalles
                                            </Button>
                                        </Grid>                                      
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image={StoreImg}
                                    title="Producto 2"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Producto 2
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Descripción del producto
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6}>
                                            <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                Comprar
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                Detalles
                                            </Button>
                                        </Grid>                                      
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image={StoreImg}
                                    title="Producto 3"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Producto 3
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Descripción del producto
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6}>
                                            <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                Comprar
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                Detalles
                                            </Button>
                                        </Grid>                                      
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Home
