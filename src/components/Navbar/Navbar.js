import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/images/shopping-logo.jpg';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';

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

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpen(false);
        }
    }

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

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
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                <b>Inicio</b>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                <b>Productos</b>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                <b>Contacto</b>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Button
                            className='nav-links'
                            ref={anchorRef}
                            aria-controls={open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                            >
                                <i className="fas fa-user-circle" style={{ color: 'white', fontSize: '25px'}}></i>
                            </Button>
                            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                <Paper>
                                    <ClickAwayListener onClickAway={closeMobileMenu}>
                                    <MenuList onClick={closeMobileMenu}  autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClick={closeMobileMenu}><Link className="link-menu" to='/login'>Ingresar</Link></MenuItem>
                                        <MenuItem onClick={closeMobileMenu}>My account</MenuItem>
                                        <MenuItem onClick={closeMobileMenu}>Logout</MenuItem>
                                    </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                                </Grow>
                            )}
                            </Popper>
                        </li>
                    </ul>
                </div>  
            </nav>  
        </>
    )
}

export default NavBar