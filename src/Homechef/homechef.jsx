import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homechef.css';
import chef from '../images/Chef/Cheff.png';

const HomeChef = () => {
    const navigate = useNavigate();

    const handleJoinNowClick = () => {
        navigate('/homechefregister');
    };
    return (
        <div className="homechef-container">
            <h2>Look what our Home chef says...</h2>
            <div className="homechef-testimonial-box">
                <p>
                    <span className="quote">“</span>
                    Being a part of Homedine has been an amazing experience. Not only do I get to share my love for cooking with others, but I also get to earn extra income doing something I'm passionate about. The team is supportive and the customers are always so appreciative of my meals.
                    <span className="quote">”</span>
                </p>
                <div className="chef-info">
                    <img src={chef} alt="chef" className="Cheff-image" />
                    <div>
                        <h4>Sridharan</h4>
                        <p>Hosur</p>
                    </div>
                </div>
            </div>
                {/* <button className="join-button">Join HomeDine Now</button> */}
                <button className="join-button" onClick={handleJoinNowClick}>Join HomeDine Now</button>

        </div>
    );
}

export default HomeChef;
