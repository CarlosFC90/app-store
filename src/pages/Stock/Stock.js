import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import './Stock.css';


class Stock extends Component {

    render() {
        return (
            <div className='stock-container'>
                <h1 style={{textAlign: 'center', margin: '25px'}}>Stock</h1>
                <div className='card-container'>
                    <div className='card'>
                        <div className='card-title' style={{textAlign: 'center', marginTop: '20px'}}><h1>Ingreso de Productos</h1></div>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <div className='form-left'>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6}>
                                            <TextField className='textfield' id="name-art" label="Nombre de Articulo" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField className='textfield' id="price-art" label="Precio" variant="outlined" />
                                        </Grid>
                                    </Grid>
                                    <TextField className='textfield' id="cate-art" label="Categoria" variant="outlined" />
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className='form-right'>
                                    <Grid container stpacing={1}>
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Descripción del Producto"
                                            multiline
                                            rows={3}
                                            variant="outlined"
                                            className='textfield'
                                        />
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Stock;

