import React, { Component } from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import Logo from '../../assets/images/shopping-logo.jpg'; 
import { Input } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {urlApi, apiKey} from '../../Services/ApiRest';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';

class Login extends Component {
    
    state = {
        form: {
            "email": '',
            "password": ''
        },
        error: false,
        errorMsg: ""
    }
    
    handleSubmit = e => {
        e.preventDefault();
    }
    
    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        //console.log(this.state.form);
    }
    
    handleButton = () => {
        let url = urlApi + apiKey;
        axios.post(url, this.state.form)
        .then( res => {
            if (res.status === 200) {
                localStorage.setItem("token", res.data.idToken);
                this.props.history.push('/home');
            }
        }).catch( error => {
            console.log(error);
            this.setState({
                error: true,
                errorMsg: 'Email no encontrado o contraseña erronea'
            })
        })
    }
    
    
    render() {

        return (
            <div className='container-login'>
                { this.state.error === true && 
                    <div className='alert-message'>
                        <Alert severity="error">{this.state.errorMsg}</Alert>
                    </div>
                }
                <div className='container-form'>
                    <img src={Logo} className="img-login" alt=""/>
                    <form onSubmit={this.handleSubmit}>
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
                                <Button onClick={this.handleButton} className='button' type='submit' variant="contained" color="primary">Iniciar Sesión</Button>
                            </div>
                            <p style={{marginTop: '7px'}}>No tenés una cuenta? -- <Link to='/register' style={{textDecoration: 'none'}}>Registrar</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
