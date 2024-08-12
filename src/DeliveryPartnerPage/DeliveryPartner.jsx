import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DeliveryPartner.css';
import Delivery from '../images/DeliveryPartnerimage/Deliverypartner.png';

const DeliveryPartner = () => {
    const navigate = useNavigate();

    const handleJoinClick = () => {
        navigate('/RegisterPage');
    };

    return (
        <div className="deliverypartner-container">
            <div className="deliverypartner-content">
                <h2>Why Be A Delivery Partner With Us?</h2>
                <div className="benefits">
                    <div className="benefit">
                        <div className="icon"></div>
                        <p>Regular payment with incentives</p>
                    </div>
                    <div className="benefit">
                        <div className="icon"></div>
                        <p>Choose the shift you'd like to work in</p>
                    </div>
                    <div className="benefit">
                        <div className="icon"></div>
                        <p>We provide insurance for you</p>
                    </div>
                </div>
                <p className="footer-text">
                    Make a great income and help bring homemade meals to your community.
                </p>
                <button className="join-button" onClick={handleJoinClick}>Join Now</button>
            </div>
            <div className="deliverypartner-image">
                <img src={Delivery} alt="Delivery Partner" className="deliver"/>
            </div>
        </div>
    );
};

export default DeliveryPartner;
