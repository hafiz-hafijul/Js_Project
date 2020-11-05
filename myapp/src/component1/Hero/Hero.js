import React from 'react';
import Logo from '../logo/Logo';
import Navbar from '../navbar/Navbar';
import Card from '../ui/card/Card';
import './Hero.css'

const Hero = () => {
    return (
        <div>
            <Card>
                <Logo />
                <Navbar />
            </Card>
        </div>
    );
};

export default Hero;