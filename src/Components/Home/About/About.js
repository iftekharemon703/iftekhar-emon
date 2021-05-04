import React from 'react';
import about from '../../../images/about.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <section id="about" className="container py-5">
            <div className="row align-items-center d-flex">
                <div className="col-md-6">
                    <img className="img-fluid" src={about}/>
                </div>
                <div className="col-md-6 px-4 my-md-5 my-sm-2 pt-md-4 pt-sm-1">
                    <p className="text-warning">About myself</p>
                    <h2 className="text-white">About Me, I'm a <span className="text-warning">Developer</span></h2>
                    <p className="text-white">Hi There, I'm iftekhar emon. I'm always updating my work to something you can see from here every day, every week and every month. Here i will update everything about how to trading works and it changes every year</p>
                    <a className="pe-4" href="/#contact">
                        <div className="btn btn-outline-warning">Get In Touch</div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;