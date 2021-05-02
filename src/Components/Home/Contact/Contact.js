import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="container text-center  py-md-5 py-sm-4">
            <div style={{backgroundColor: '#5352ed'}} className="col-md-8 mx-auto p-4">
            <h5 className="text-white text-uppercase">Get In Touch</h5>
            <form action="" className="mt-5">
                       <div className="form-group mb-4">
                           <input type="text" className="form-control" placeholder="Your Name"/>
                       </div>
                       <div className="form-group mb-4">
                           <input type="email" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group mb-4">
                           <textarea name="" className="form-control" id="" cols="30" rows="7" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group mb-4 text-center">
                           <button type="button" className="btn btn-outline-success text-white"> Send </button>
                       </div>
                   </form>
            </div>
        </section>
    );
};

export default Contact;