import React, { Component } from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import Logo from '../../assets/images/shopping-logo.jpg'; 
import { Input } from '@material-ui/core';


class Login extends Component {
    state = {
        form: {
            email: '',
            password: ''
        }
    }
    
    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    render() {
        return (
            <div className='container-login'>
                <div className='container-form'>
                    <img src={Logo} className="img-login" alt=""/>
                    <div className='form-group'>
                        <label><b>Email: </b></label>
                        <br/>
                        <Input 
                            className='form-control' 
                            type='email'
                            name='email'
                            onChange={this.handleChange}
                        />
                        <br/>
                        <br/>
                        <label><b>Contraseña: </b></label>
                        <br/>
                        <Input
                            className='form-control'
                            type='password'
                            name='password'
                            onChange={this.handleChange}
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