import React from 'react';
import fixUrPhoto from '../../../images/FixUrPhoto.png';
import doctorsPortal from '../../../images/DoctorPortal.png';
import FrozenFood from '../../../images/FrozenFood.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <section id="portfolio" className="container  py-md-5 py-sm-4">
            <h2 className="text-center text-warning">My Works</h2>
            <div className="row align-items-center d-flex">
                <div className="col-md-4">
                    <div class="card m-2">
                        <img src={fixUrPhoto} class="card-img-top img-fluid" alt="..."/>
                        <div class="card-body bg-brand">
                            <h5 class="card-title text-warning">FixUrPhoto</h5>
                            <p class="card-text text-white">A single-page photo editing app with a dashboard where people looking for photo editing services. Whenever the customer wants he can log in in-to the site and he can review about services.</p>
                            <div className="technology">
                                <span>React Js</span>
                                <span>Node Js</span>
                                <span>MongoDB</span> <br/> <br/>
                                <span>Express Js</span>
                                <span>Bootstrap</span>
                                <span>Stripe</span>
                            </div>

                            <br/> <br/>
                            <a target="_blank" href="https://github.com/iftekharemon703/fixurpixels-client"><FontAwesomeIcon className="bg-white me-3" icon={faGithub} /></a>
                            <a target="_blank" href="https://fixurpixels.web.app/"><FontAwesomeIcon className="bg-white" icon={faExternalLinkAlt} /></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card m-2">
                        <img src={doctorsPortal} class="card-img-top img-fluid" alt="..."/>
                        <div class="card-body bg-brand">
                            <h5 class="card-title text-warning">Doctors Portal</h5>
                            <p class="card-text text-white">A single-page web app with a dashboard. People can appoint a suitable date with the doctor. Doctors can review their appointments and prescribe medicine to a Patient from their dashboard.</p>
                            <div className="technology">
                                <span>React Js</span>
                                <span>Node Js</span>
                                <span>MongoDB</span> <br/> <br/>
                                <span>Express Js</span>
                                <span>Bootstrap</span>
                            </div>

                            <br/> <br/>
                            <a target="_blank" href="https://github.com/iftekharemon703/doctors-portal-client"><FontAwesomeIcon className="bg-white me-3" icon={faGithub} /></a>
                            <a target="_blank" href="https://doctors-portal-691d6.web.app/"><FontAwesomeIcon className="bg-white" icon={faExternalLinkAlt} /></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card m-2">
                        <img src={FrozenFood} class="card-img-top img-fluid" alt="..."/>
                        <div class="card-body bg-brand">
                            <h5 class="card-title text-warning">Frozen Food</h5>
                            <p class="card-text text-white py-2">A single-page eCommerce app with a dashboard where people add books to any product. Whenever the customer wants he can log in in-to the site and add products.</p>
                            <div className="technology">
                                <span>React Js</span>
                                <span>Node Js</span>
                                <span>MongoDB</span> <br/> <br/>
                                <span>Express Js</span>
                                <span>Bootstrap</span>
                            </div>

                            <br/> <br/>
                            <a target="_blank" href="https://github.com/iftekharemon703/frozen-food-client"><FontAwesomeIcon className="bg-white me-3" icon={faGithub} /></a>
                            <a target="_blank" href="https://cranky-wiles-4bf824.netlify.app/"><FontAwesomeIcon className="bg-white" icon={faExternalLinkAlt} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;