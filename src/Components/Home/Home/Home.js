import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Hero from '../Hero/Hero';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <main>
            <Hero></Hero>
            <About></About>
            <Portfolio></Portfolio>
            <Services></Services>
            <Contact></Contact>
        </main>
    );
};

export default Home;