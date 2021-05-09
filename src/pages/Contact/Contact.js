import React from 'react';
import './Contact.css';
import ImgContact from '../../assets/images/email-photo.jpg';
import Logo from '../../assets/images/shopping-logo.jpg';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='banner-contact-container'>
                <img src={ImgContact} alt="Img Banner"/>
                <h2>CONTACTO</h2>
            </div>
            <div className='form-contact-container'>
                <Grid container spacing={0}>
                    <Grid item xs={12} md={6}>
                        <div className='left-form'>
                            <img src={Logo} class="imgContact" alt="Logo"/>
                            <div className='social-contact-links'>
                                <Grid container spacing={2}>
                                    <Grid item xs={2}>
                                        <Link to='/' className='social-link'>
                                            <i className="fas fa-phone"></i>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Link to='/' style={{textDecoration: 'none'}}><p>+5492234556677</p></Link>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid item xs={2}>
                                        <Link to='/' className='social-link'>
                                            <i className="fas fa-globe"></i>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Link to='/' style={{textDecoration: 'none'}}><p>www.online-shopping.com</p></Link>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid item xs={2}>
                                        <Link to='/' className='social-link'>
                                            <i className="fas fa-map-marker-alt"></i>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Link to='/' style={{textDecoration: 'none'}}><p>Bolivar 2200, Mar del Plata, Buenos Aires, Argentina</p></Link>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className='social-media-contact'>
                                <h3><i>También nos podés encontrar en...</i></h3>
                                <div className='social-media-links'>
                                    <Link to='/' className='social-link'><i className="fab fa-instagram"></i></Link>
                                    <Link to='/' className='social-link'><i className="fab fa-facebook-square"></i></Link>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className='right-form'>
                            <h2><i>Datos Requeridos</i></h2>
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={6}>
                                    <TextField id="filled-basic" label="Nombre" variant="filled" style={{ width: '100%', marginBottom: '20px'}}/>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField id="filled-basic" label="email" type='email' variant="filled" style={{ width: '100%', marginBottom: '20px'}}/>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField id="filled-basic" label="Ciudad" type='text' variant="filled" style={{ width: '100%', marginBottom: '20px'}}/>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField id="filled-basic" label="Provincia" type='text' variant="filled" style={{ width: '100%', marginBottom: '20px'}}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    id="filled-multiline-static"
                                    label="Motivo de contacto"
                                    multiline
                                    rows={5}
                                    variant="filled"
                                    style={{ width: '100%'}}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Contact
