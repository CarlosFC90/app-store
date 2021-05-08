import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/shopping-logo.jpg';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container-footer'>
                <div className='row-footer'>
                    <div className='footer-col'>
                        <Link to='/'>
                            <img src={Logo} class="img-fluid" alt="Logo"/>
                        </Link>
                        <h5>Online Shopping</h5>
                        <h5>&copy;{new Date().getFullYear()}</h5>
                    </div>
                    <div className='footer-col'>
                        <h3>Pages</h3>
                        <ul>
                            <li><Link to='/' className='link'><b>Home</b></Link><br/></li>
                            <li><Link to='/products' className='link'><b>Productos</b></Link><br/></li>
                            <li><Link to='/contact' className='link'><b>Contacto</b></Link><br/></li>
                            <li><Link to='/register' className='link'><b>Registrar</b></Link><br/></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h3>Contact</h3>
                        <h4>Bs. As., Argentina</h4>
                        <h4>+5492234556677</h4>
                        <h4>Bolivar 2200</h4>
                    </div>
                    <div className='footer-col'>
                        <h3>Social Media</h3>
                        <div className='social-links'>
                            <Link to='/' className='socialLink'><i className="fab fa-instagram"></i></Link>
                            <Link to='/' className='socialLink'><i className="fab fa-facebook-square"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
