import React, { Component } from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import Logo from '../../assets/images/shopping-logo.jpg'; 
class Login extends Component {
    render() {
        return (
            <div className='container'>
                <div className='container-form'>
                    <img src={Logo} className="img-login" alt=""/>
                    <div className='form-group'>
                        <label>Email: </label>
                        <br/>
                        <input 
                            className='form-control' 
                            type='text'
                        />
                        <br/>
                        <label>Contraseña: </label>
                        <br/>
                        <input
                            className='form-control'
                            type='password'
                        />
                        <br/>
                        <div className='container-button'>
                            <Button className='button' variant="contained" color="primary">Iniciar Sesión</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
