import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="site-footer py-3 px-3" >
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint sequi dolor ipsum rerum quam vitae vero nam facilis officia exercitationem autem animi quaerat nihil ducimus, magnam repellendus voluptas? Autem voluptas assumenda id consequatur dolor dolore corporis suscipit, quam ratione, error aliquid aperiam nemo beatae molestiae sed! Tempore commodi eveniet illo?</p>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul className="footer-links">
                            <li>Service</li>
                            <li>Facility</li>
                            <li>Conatct Us</li>
                            <li>24*7 Call Care</li>
                        </ul>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <p>About Us</p> <br /> <p>Services</p>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright 2021 || All Rights Reserved by ShoppinKoro
              </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;