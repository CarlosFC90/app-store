import React from 'react';
import { Button }  from '@material-ui/core';
import './HeroSection.css';
import Video from '../../assets/videos/videoHome.mp4';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src={Video} autoPlay loop muted />
            <h1>Online Shopping</h1>
            <p>Bienvenido al shopping online con los precios más bajos del pais</p>
            <div className='hero-btns'>
                <Button
                    variant="contained" 
                    color="primary"
                    size="large" 
                    href="/products"
                >
                    VER PRODUCTOS <i className="fas fa-chevron-right"></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
