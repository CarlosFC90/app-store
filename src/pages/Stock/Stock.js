import React, { useState } from 'react';
import { Button, Grid, Input } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './Stock.css';
import SaveIcon from '@material-ui/icons/Save';
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

function Stock() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
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

    return (
        <div className='stock-container'>
            <h1 style={{textAlign: 'center', margin: '25px'}}><u>Stock</u></h1>
            <div className='card-container'>
                <div className='card'>
                    <div className='card-title'><h1>Ingreso de Productos</h1></div>
                    <hr/>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <div className='form-left'>
                                <TextField className='textfield-row' id="name-art" label="Nombre de Articulo" variant="outlined" />
                                <Grid container spacing={1}>
                                    <Grid item xs={12} md={6}>
                                        <Button className='button-cate' color="secondary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                            Categorias &nbsp;<i className="fas fa-chevron-down"></i>
                                        </Button>
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            className='menu-button-cate'
                                        >
                                            <MenuItem onClick={handleClose}>Electrodomesticos</MenuItem>
                                            <MenuItem onClick={handleClose}>Informática</MenuItem>
                                            <MenuItem onClick={handleClose}>Hogar</MenuItem>
                                            <MenuItem onClick={handleClose}>Jardineria</MenuItem>
                                        </Menu>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField className='textfield' id="price-art" label="Precio" variant="outlined" />
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div className='form-center'>
                                <Grid container spacing={1}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Descripción del Producto"
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        className='textfield'
                                    />
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div className='form-right'>
                                <Grid container spacing={1}>
                                    <h4>INGRESAR IMAGEN</h4>
                                    <Input type='file'/>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                    <div className='button-save'>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<SaveIcon />}
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
                        className="acordion-header"
                        >
                        <Typography className={classes.heading}><b>Electrodomesticos</b></Typography>
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
                                        <StyledTableRow>
                                            <StyledTableCell component="th" scope="row">
                                                row.name
                                            </StyledTableCell>
                                            <StyledTableCell align="center">row.photo</StyledTableCell>
                                            <StyledTableCell align="center">row.calories</StyledTableCell>
                                            <StyledTableCell align="center">
                                                <IconButton aria-label="delete" color="secondary">
                                                    <DeleteIcon />
                                                </IconButton>
                                                <IconButton aria-label="edit" color="primary">
                                                    <EditIcon />
                                                </IconButton>
                                            </StyledTableCell>
                                        </StyledTableRow>
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
                        <Typography className={classes.heading}><b>Informática</b></Typography>
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
                                        <StyledTableRow>
                                            <StyledTableCell component="th" scope="row">
                                                row.name
                                            </StyledTableCell>
                                            <StyledTableCell align="center">row.photo</StyledTableCell>
                                            <StyledTableCell align="center">row.calories</StyledTableCell>
                                            <StyledTableCell align="center">
                                                <IconButton aria-label="delete" color="secondary">
                                                    <DeleteIcon />
                                                </IconButton>
                                                <IconButton aria-label="edit" color="primary">
                                                    <EditIcon />
                                                </IconButton>
                                            </StyledTableCell>
                                        </StyledTableRow>
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
                        <Typography className={classes.heading}><b>Hogar</b></Typography>
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
                                        <StyledTableRow>
                                            <StyledTableCell component="th" scope="row">
                                                row.name
                                            </StyledTableCell>
                                            <StyledTableCell align="center">row.photo</StyledTableCell>
                                            <StyledTableCell align="center">row.calories</StyledTableCell>
                                            <StyledTableCell align="center">
                                                <IconButton aria-label="delete" color="secondary">
                                                    <DeleteIcon />
                                                </IconButton>
                                                <IconButton aria-label="edit" color="primary">
                                                    <EditIcon />
                                                </IconButton>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='acordion'>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        className='acordion'
                        >
                        <Typography className={classes.heading}><b>Jardineria</b></Typography>
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
                                        <StyledTableRow>
                                            <StyledTableCell component="th" scope="row">
                                                row.name
                                            </StyledTableCell>
                                            <StyledTableCell align="center">row.photo</StyledTableCell>
                                            <StyledTableCell align="center">row.calories</StyledTableCell>
                                            <StyledTableCell align="center">
                                                <IconButton aria-label="delete" color="secondary">
                                                    <DeleteIcon />
                                                </IconButton>
                                                <IconButton aria-label="edit" color="primary">
                                                    <EditIcon />
                                                </IconButton>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Stock;

