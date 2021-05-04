import React from 'react';
import hero from '../../../images/hero.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <div id="home" className="container py-md-5">
            <div className="row d-flex align-items-center">
            <div className="col-md-6 order-md-2">
                    <img className="img-fluid p-5" src={hero}/>
            </div>
            <div className="col-md-6">
                <h4 className="text-warning">Hello I'm</h4>
                        <h2 className="text-white display-4 text-uppercase"><b>Iftekhar Emon</b></h2>
                        <div className="d-flex">
                            <li className="text-warning ms-3 pe-5">Web Developer</li>
                            <li className="text-warning">Programmer</li>
                        </div>
                        <p className="text-white pt-3">My main motto is to do my job perfectly each and every way and see myself successful
                            after 2 years. I intend to put in a great effort while working as a team and complete
                            anything our team has taken. I always look forward to making a healthy working
                            relationship, build in trust, open communication, and responsibility.
                        </p>
                    <a className="pe-4" href="/#about">
                        <div className="btn btn-outline-warning">About Me</div>
                    </a>
                    <a href="https://drive.google.com/uc?export=download&id=1WGYOQwKVeg3JBcmi7Thb8FlZ2Zc_ADgo">
                        <div className="btn btn-outline-warning"><FontAwesomeIcon icon={faDownload} /> Download Resume</div>
                   </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;