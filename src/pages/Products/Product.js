import React from 'react';
import './Product.css';
import ImgBanner from '../../assets/images/img-products.jpg';
import ImgStore from '../../assets/images/App-Store.jpg';
import { Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactPaginate from 'react-paginate';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
});

const Product = () => {

    const classes = useStyles();

    return (
        <div className='products-container'>
            <div className='banner-container'>
                <img src={ImgBanner} alt="Img Banner"/>
                <h2>PRODUCTOS</h2>
            </div>
            <div className='products-sale'>
                <Grid container spacing={1} styles={{ margin: '0px', padding: '0px'}}>
                    <Grid item xs={12} md={2} className='grid-cate'>
                       <div className='cate-section'>
                           <h2>VER</h2>
                           <hr/>
                           <Link><p>Todos los productos</p></Link>
                           <h2>CATEGORIAS</h2>
                           <hr/>
                           <Link><p>Electrodomesticos</p></Link>
                           <Link><p>Hogar</p></Link>
                           <Link><p>Informática</p></Link>
                           <Link><p>Jardineria</p></Link>
                       </div> 
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <div className='pagination-container'>
                            <ReactPaginate
                                previousLabel={'previous'}
                                nextLabel={'next'}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                containerClassName={'pagination'}
                                activeClassName={'active'}
                            />
                        </div>
                        <Grid container spacing={2} style={{ padding: '25px 15px'}}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        image={ImgStore}
                                        title="Producto 1"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Producto 1
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Descripción del articulo  
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Grid container spacing={1}>
                                            <Grid item xs={6}>
                                                <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                    <i className="fas fa-cart-arrow-down" style={{ paddingBottom: '2px'}}></i> &nbsp;Comprar
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                    <i className="fas fa-clipboard-list" style={{ paddingBottom: '2px'}}></i> &nbsp;Detalles
                                                </Button>
                                            </Grid>                                      
                                        </Grid>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        image={ImgStore}
                                        title="Producto 2"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Producto 2
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Descripción del articulo
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Grid container spacing={1}>
                                            <Grid item xs={6}>
                                                <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                    <i className="fas fa-cart-arrow-down" style={{ paddingBottom: '2px'}}></i> &nbsp;Comprar
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                    <i className="fas fa-clipboard-list" style={{ paddingBottom: '2px'}}></i> &nbsp;Detalles
                                                </Button>
                                            </Grid>                                      
                                        </Grid>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        image={ImgStore}
                                        title="Producto 3"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Producto 3
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Descripción del articulo
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Grid container spacing={1}>
                                            <Grid item xs={6}>
                                                <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                    <i className="fas fa-cart-arrow-down" style={{ paddingBottom: '2px'}}></i> &nbsp;Comprar
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                    <i className="fas fa-clipboard-list" style={{ paddingBottom: '2px'}}></i> &nbsp;Detalles
                                                </Button>
                                            </Grid>                                      
                                        </Grid>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} style={{ padding: '25px 15px'}}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        image={ImgStore}
                                        title="Producto 4"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Producto 4
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Descripción del articulo
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Grid container spacing={1}>
                                            <Grid item xs={6}>
                                                <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                    <i className="fas fa-cart-arrow-down" style={{ paddingBottom: '2px'}}></i> &nbsp;Comprar
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                    <i className="fas fa-clipboard-list" style={{ paddingBottom: '2px'}}></i> &nbsp;Detalles
                                                </Button>
                                            </Grid>                                      
                                        </Grid>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        image={ImgStore}
                                        title="Producto 5"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Producto 5
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Descripción del articulo
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Grid container spacing={1}>
                                            <Grid item xs={6}>
                                                <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                    <i className="fas fa-cart-arrow-down" style={{ paddingBottom: '2px'}}></i> &nbsp;Comprar
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                    <i className="fas fa-clipboard-list" style={{ paddingBottom: '2px'}}></i> &nbsp;Detalles
                                                </Button>
                                            </Grid>                                      
                                        </Grid>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        image={ImgStore}
                                        title="Producto 6"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Producto 6
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Descripción del articulo
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Grid container spacing={1}>
                                            <Grid item xs={6}>
                                                <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                    <i className="fas fa-cart-arrow-down" style={{ paddingBottom: '2px'}}></i> &nbsp;Comprar
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                    <i class="fas fa-clipboard-list" style={{ paddingBottom: '2px'}}></i> &nbsp;Detalles
                                                </Button>
                                            </Grid>                                      
                                        </Grid>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} style={{ padding: '25px 15px'}}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        image={ImgStore}
                                        title="Producto 7"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Producto 7
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Descripción del articulo
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Grid container spacing={1}>
                                            <Grid item xs={6}>
                                                <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                    <i className="fas fa-cart-arrow-down" style={{ paddingBottom: '2px'}}></i> &nbsp;Comprar
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                    <i className="fas fa-clipboard-list" style={{ paddingBottom: '2px'}}></i> &nbsp;Detalles
                                                </Button>
                                            </Grid>                                      
                                        </Grid>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        image={ImgStore}
                                        title="Producto 8"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Producto 8
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Descripción del articulo
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Grid container spacing={1}>
                                            <Grid item xs={6}>
                                                <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                    <i className="fas fa-cart-arrow-down" style={{ paddingBottom: '2px'}}></i> &nbsp;Comprar
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                    <i className="fas fa-clipboard-list" style={{ paddingBottom: '2px'}}></i> &nbsp;Detalles
                                                </Button>
                                            </Grid>                                      
                                        </Grid>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        image={ImgStore}
                                        title="Producto 9"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Producto 9
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Descripción del articulo
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Grid container spacing={1}>
                                            <Grid item xs={6}>
                                                <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                    <i className="fas fa-cart-arrow-down" style={{ paddingBottom: '2px'}}></i> &nbsp;Comprar
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Button size="small" color="primary" variant="outlined" style={{width: '100%'}}>
                                                    <i className="fas fa-clipboard-list" style={{ paddingBottom: '2px'}}></i> &nbsp;Detalles
                                                </Button>
                                            </Grid>                                      
                                        </Grid>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                        <div className='pagination-container'>
                            <ReactPaginate
                                previousLabel={'previous'}
                                nextLabel={'next'}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                containerClassName={'pagination'}
                                activeClassName={'active'}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Product
