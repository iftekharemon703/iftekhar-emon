import React from 'react';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light py-3">
            <div class="container">
                <a class="navbar-brand text-white" href="#home">Iftekhar Emon</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span style={{color: 'red'}} class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link text-white px-3" aria-current="page" href="#home" id="home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white px-3" aria-current="page" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white px-3" aria-current="page" href="#portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white px-3" aria-current="page" href="#contact">Contact</a>
                    </li>
                    <a target="_blank" href="https://drive.google.com/file/d/1G_ADfo2nG_5Xj9KShR-uziTv26MUQgCc/view">
                        <div className="btn btn-outline-warning px-3">Resume</div>
                    </a>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;