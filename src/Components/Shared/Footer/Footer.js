import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className="container d-flex">
            <div className="col-md-6">
                <span className="mt-2 text-white">All Right Reserved <a className="text-warning" href="https://www.linkedin.com/in/iftekhar-hossain-b6bbb5200/">Iftekhar Emon</a></span>
            </div>
            <div className="col-md-6 text-end">
                <a href="https://www.linkedin.com/in/iftekhar-emon/">
                    <FontAwesomeIcon className="text-white mx-md-3 mx-sm-1"  size="lg" icon={faLinkedinIn} />
                </a>
                <a href="https://github.com/iftekharemon703">
                    <FontAwesomeIcon className="text-white mx-md-3 mx-sm-1"  size="lg" icon={faGithub} />
                </a>
                <a href="https://www.facebook.com/iftekhare1">
                    <FontAwesomeIcon className="text-white mx-md-3 mx-sm-1"  size="lg" icon={faFacebook} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;