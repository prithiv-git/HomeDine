import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaWhatsapp, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="delivery">
                <h2>We deliver at</h2>
                <ul>
                    <li>Hosur</li>
                    <li>Trichy</li>
                    <li>Coimbatore</li>
                    <li>Madurai</li>
                    <li>Kochi</li>
                    <li>Pondicherry</li>
                    <li>Chennai</li>
                    <li>Bangalore</li>
                </ul>
            </div>
            <div className="social-media">
                <h2>Follow us:</h2>
                <ul>
                    <li><a href="#"><FaLinkedin /></a></li>
                    <li><a href="#"><FaFacebook /></a></li>
                    <li><a href="#"><FaWhatsapp /></a></li>
                    <li><a href="#"><FaInstagram /></a></li>
                    <li><a href="#"><FaTwitter /></a></li>
                    <li><a href="#"><FaYoutube /></a></li>
                </ul>
            </div>
           
            <div className="copyright">
                <p>All Rights Reserved © 2024 HomeDine Technologies Pvt Ltd.</p>
            </div>
        </footer>
    );
};

export default Footer;
