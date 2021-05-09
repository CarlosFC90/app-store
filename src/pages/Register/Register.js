import React from 'react'
import './Register.css';
import Logo from '../../assets/images/shopping-logo.jpg';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='register-container'>
            <div className='container-form'>
                <img src={Logo} className="img-login" alt=""/>
                <div className='form-group'>
                    <label><b>Nombre: </b></label>
                    <br/>
                    <Input 
                        className='form-control' 
                        type='text'
                        name='name'
                    />
                    <br/>
                    <br/>
                    <label><b>Apellido: </b></label>
                    <br/>
                    <Input 
                        className='form-control' 
                        type='text'
                        name='lastName'
                    />
                    <br/>
                    <br/>
                    <label><b>Email: </b></label>
                    <br/>
                    <Input 
                        className='form-control' 
                        type='email'
                        name='email'
                    />
                    <br/>
                    <br/>
                    <label><b>Contraseña: </b></label>
                    <br/>
                    <Input
                        className='form-control'
                        type='password'
                        name='password'
                    />
                    <br/>
                    <div className='container-button'>
                        <Button className='button' variant="contained" color="primary">Registrarse</Button>
                    </div>
                    <p style={{marginTop: '7px'}}>Ya tenés una cuenta? -- <Link to='/login' style={{textDecoration: 'none'}}>Ingresar</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Register
