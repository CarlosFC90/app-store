import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/images/shopping-logo.jpg';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = (event) => {
        setClick(false);
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
      
        setOpen(false);
    };

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();

    }, [])

    window.addEventListener('resize', showButton);

    const prevOpen = useRef(open);

    useEffect(() => {
        if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const logout = () => {
        console.log('Button logout');
        localStorage.removeItem("token");
    }

    const main = () => {
        if (!localStorage.getItem('token')) {
            window.location.href = '/';
        }
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={Logo} className="img-shopping" alt="Logo"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick} >
                        <i className={ click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={ click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/home' onChange={main} className='nav-links' onClick={closeMobileMenu, main}>
                                <b>Inicio</b>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu, main}>
                                <b>Tienda</b>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu, main}>
                                <b>Contacto</b>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/stock' className='nav-links' onClick={closeMobileMenu}>
                                <b>Productos</b>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                <b onClick={logout}> Salir </b>
                            </Link>    
                        </li>
                    </ul>
                </div>  
            </nav>  
        </>
    )
}

export default NavBar