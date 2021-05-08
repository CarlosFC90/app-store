import React from 'react';
import './Home.css';
import HeroSection from '../../components/HeroSection/HeroSection';

const Home = () => {
    return (
        <div className='container-home'>
            <HeroSection/>
            <div className='info'>
                <h2 className='title-home'>Bienvenid@!!</h2>
            </div>
        </div>
    )
}

export default Home
