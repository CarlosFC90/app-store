import React, { useState, useEffect } from 'react';
import { Button, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import StockBanner from '../../assets/images/stock-banner.png';
import './Stock.css';
import SaveIcon from '@material-ui/icons/Save';
import Select from '@material-ui/core/Select';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { urlDataBase, productDataBase, auth } from '../../Services/ApiRest';
import axios from 'axios';


export const ProductDB = (name) => {
    const [data, setData] = useState();

    function Get(data) {

        return data ? Object.keys(data).map(key => ({
            id: key,
            name: data[key].name,
            price: data[key].price,
            description: data[key].description,
            category: data[key].category,
            image: data[key].image
        })): null
    }
  
    useEffect(() => {
      const fetchData = async () => {
        let url = urlDataBase + productDataBase + localStorage.getItem("token");
        const res = await axios.get(url)
        
        const data = Get(res.data);

        setData(data);
      };
      fetchData();
    }, [name]);
    return [data];
};

function Stock() {

    const resetProduct = {
        name: '',
        category: '',
        price: 0,
        description: '',
        image: ''
    }   

    const [lastUpdate, setLastUpdate] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [img, setImg] = useState();
    const [edit, setEdit] = useState(false);
    const [products] = ProductDB(lastUpdate);
    const [product, setProduct] = useState(resetProduct);



    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          border: '1px solid rgba(0, 0, 0, .125)',
        },
        heading: {
          fontSize: theme.typography.pxToRem(15),
          fontWeight: theme.typography.fontWeightRegular
        },
        table: {
            minWidth: 700,
        },
    }));

    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
    }))(TableRow);

    const classes = useStyles();

    const handleInputChange = async (e) => {
        //setImg(e.target.files[0]);

        const {name, value} = e.target;
        await setProduct((prevState) => ({
            ...prevState,
            [name]: value
        })); 
    }

    const handleSubmit = async e => {
        if(product.category.length === 0 || product.name.length === 0) {
            return;
        } 
        if(product.id) {
            const id = product.id;
            delete product.id;
            await handlePatch(id, product);
            setLastUpdate('Patch');
        } else {
            await handlePost(product);
            setLastUpdate('Post');
        }
        setProduct(resetProduct);
        console.log(product);
    }

    const handleEdit = async items => {
        await setProduct(items); 
    }
    
    const handlePatch = async(id, body) => {
        let url = urlDataBase + "/products/" + id + "/" + auth + localStorage.getItem("token");
        await axios.patch(url, body); 
    }

    const handlePost = async (body) => {
        let url = urlDataBase + productDataBase + localStorage.getItem("token");
        await axios.post(url, body);
    }


    const DeleteProduct = async (id) => {
        let url = urlDataBase + "/products/" + id + "/" + auth + localStorage.getItem("token");
        await axios.delete(url);
        setLastUpdate('Delete');
    }

    return (
        <div>
            <div className='banner-container-stock'>
                <img src={StockBanner} alt="Img Banner"/>
                <h2>STOCK</h2>
            </div>
            <div className='stock-container'>
                <div className='card-container'>
                    <div className='card'>
                        <div className='card-title'><h1>Ingreso de Productos</h1></div>
                        <hr/>
                        <Grid container className='grid-container'>
                            <form onSubmit={handleSubmit}>
                                <div className='form-group' style={{ margin: '20px'}}>
                                    <Grid item xs={12}>
                                        <TextField 
                                            type='text' 
                                            className='form-control' 
                                            id="name" 
                                            name="name" 
                                            label="Nombre de Articulo" 
                                            variant="outlined" 
                                            style={{ width: '100%'}}
                                            onChange={handleInputChange}
                                            value={product.name}
                                        />    
                                    </Grid>
                                </div>
                                <div className='form-group' style={{ margin: '20px'}}>
                                    <Grid item xs={12}>
                                        <Button className='button-cate' variant="contained" color="secondary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                            Categorias &nbsp;<i className="fas fa-chevron-down"></i>
                                        </Button>
                                        <Select
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            className='form-control'
                                            name="category"
                                            onChange={handleInputChange}
                                            value={product.category}
                                        >
                                            <MenuItem onClick={handleClose} value={'Fruta'}>Fruta</MenuItem>
                                            <MenuItem onClick={handleClose} value={'Verdura'}>Verdura</MenuItem>
                                        </Select>
                                    </Grid>
                                </div>
                                <div className='form-group' style={{ margin: '20px'}}>
                                    <Grid item xs={12}>
                                        <TextField 
                                            className='form-control' 
                                            id="price-art" 
                                            label="Precio" 
                                            name="price" 
                                            variant="outlined"
                                            onChange={handleInputChange} 
                                            type='number'
                                            value={product.price}
                                        />
                                    </Grid>
                                </div>
                                <div className='form-group' style={{ margin: '20px'}}>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Descripción del Producto"
                                            multiline
                                            rows={5}
                                            variant="outlined"
                                            className="form-control"
                                            name="description"
                                            onChange={handleInputChange}
                                            value={product.description}
                                        />
                                    </Grid>
                                </div>
                                <div className='form-group' style={{ margin: '20px'}}>
                                    <Grid item sm={12}>
                                        <h4 style={{textAlign: 'center', border: '1px solid #fff'}}>INGRESAR IMAGEN</h4>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                size="large"
                                                component="label"
                                            >
                                                Cargar imagen &nbsp; <i className="far fa-image"></i>
                                                <div className='form-group'>
                                                    <input 
                                                        className='form-control' 
                                                        style={{ display: "none" }} 
                                                        type="file" 
                                                        id="image" 
                                                        name="image" 
                                                        accept="image/png, image/jpeg" 
                                                        onChange={handleInputChange}
                                                        value={product.image}
                                                    />
                                                </div>
                                            </Button>
                                            <span style={{ marginLeft: 5 }}>{img ? img.name : null}</span>
                                    </Grid>
                                </div>
                            </form>
                        </Grid>
                        <div className='button-save'>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                startIcon={<SaveIcon />}
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Guardar
                            </Button>
                        </div>
                        
                    </div>
                </div>
                <div className='acordion-container'>
                    <h1 className='title-category'>Categorias</h1>
                    <div>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography className={classes.heading}><b>Frutas</b></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell><b>Nombre</b></StyledTableCell>
                                                <StyledTableCell align="center"><b>Imagen</b></StyledTableCell>
                                                <StyledTableCell align="center"><b>Precio</b></StyledTableCell>
                                                <StyledTableCell align="center"><b>Opciones</b></StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            { products ? products.map((item) => item.category === "Fruta" ? (
                                                    <StyledTableRow key={item}>
                                                        <StyledTableCell component="th" scope="row" style={{color: 'black'}}>
                                                            {item.name}
                                                        </StyledTableCell>
                                                        <StyledTableCell align="center">
                                                            <img src={item.image} alt="productImg" style={{ height: '50px', width: '50px'}}/>
                                                        </StyledTableCell>
                                                        <StyledTableCell align="center">
                                                            {item.price}
                                                        </StyledTableCell>
                                                        <StyledTableCell align="center">
                                                            <IconButton 
                                                                aria-label="delete" 
                                                                color="secondary"
                                                                onClick={() => DeleteProduct(item.id)}    
                                                            >
                                                                <DeleteIcon />
                                                            </IconButton>
                                                            <IconButton 
                                                                aria-label="edit" 
                                                                color="primary"
                                                                onClick={() => handleEdit(item)}
                                                            >
                                                                <EditIcon />
                                                            </IconButton>
                                                        </StyledTableCell>
                                                    </StyledTableRow>
                                            ): null ): null}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            className='acordion'
                            >
                            <Typography className={classes.heading}><b>Verduras</b></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell><b>Nombre</b></StyledTableCell>
                                                <StyledTableCell align="center"><b>Imagen</b></StyledTableCell>
                                                <StyledTableCell align="center"><b>Precio</b></StyledTableCell>
                                                <StyledTableCell align="center"><b>Opciones</b></StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            { products ? products.map((item) => item.category === "Verdura" ? (
                                                        <StyledTableRow key={item}>
                                                            <StyledTableCell component="th" scope="row" style={{color: 'black'}}>
                                                                {item.name}
                                                            </StyledTableCell>
                                                            <StyledTableCell align="center">
                                                                <img src={item.image} alt="productImg" style={{ height: '50px', width: '50px'}}/>
                                                            </StyledTableCell>
                                                            <StyledTableCell align="center">
                                                                {item.price}
                                                            </StyledTableCell>
                                                            <StyledTableCell align="center">
                                                                <IconButton 
                                                                    aria-label="delete" 
                                                                    color="secondary"
                                                                    onClick={() => DeleteProduct(item.id)} 
                                                                >
                                                                    <DeleteIcon />
                                                                </IconButton>
                                                                <IconButton 
                                                                    aria-label="edit" 
                                                                    color="primary"
                                                                    onClick={() => handleEdit(item)}
                                                                >
                                                                    <EditIcon />
                                                                </IconButton>
                                                            </StyledTableCell>
                                                        </StyledTableRow>
                                                ): null ): null}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stock;

