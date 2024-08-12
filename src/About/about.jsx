import React from 'react';
import AboutPage from '../images/AboutPageImage/Aboutpage.png';

const About = () => {
    return (
        <div className="about-container">
            <div className="hero-section">
                <img src={AboutPage} alt="about" className="hero-image" />
                <div className="hero-text">
                    <h1>Where every meal is cooked with <span className="highlight">love</span>.</h1>
                </div>
            </div>
            <div className="content-section">
                <div className="content-block">
                    <h2>Who <span className="highlight">we are?</span></h2>
                    <p>Are you tired of bland, uninspiring meals that leave you feeling unsatisfied? At Home Dine, we understand that a truly wholesome meal doesn't just nourish the body, it nourishes the heart and soul. That's why our dedicated home chefs are passionate about creating meals that are not only delicious but also infused with love and care.</p>
                    <p>With Home Dine, you can indulge in the comforting taste of homemade meals, just like how mom makes! Imagine savouring a meal that is not only delicious but also made with the same love and care you would expect from your mother.</p>
                    <p>But it's not just about the taste, we also strive to empower your family and community to be as healthy as they can be. We believe that a healthy diet is the foundation of a happy and fulfilled life, and our mission is to make it easy for you to access the nutritious home-cooked meals you need to thrive.</p>
                    <p>So why settle for mediocre meals when you can have the taste of home and the peace of mind that comes with knowing you are feeding yourself and your loved ones with the best? Try Home Dine today and experience the difference for yourself.</p>
                </div>
                <div className="content-block">
                    <h2>What <span className="highlight">is Home Dine?</span></h2>
                    <p>At Home Dine, we believe that everyone deserves to enjoy delicious and healthy food, without compromising on taste or quality. We are an early-stage food tech startup on a mission to revolutionise the food industry by building an e-commerce marketplace that offers a wide range of healthy alternatives to restaurant-delivered food.</p>
                    <p>We partner with extremely talented home cooks to bring you delicious homemade meals straight from their homes. Not only does this allow us to offer our customers an unparalleled dining experience, but it also helps to create thousands of micro-entrepreneurs in society and enables them to make a primary livelihood for their families.</p>
                    <p>We understand the importance of food safety and that's why all our partner cooks are FSSAI registered. We also believe that technology plays a critical role in evolving the food sector, that's why we use cutting-edge technology to create a scalable platform that enables seamless collaboration between cooks, customers, and riders.</p>
                    <p>At Home Dine, we are dedicated to making it easy for you to access healthy and delicious homemade food, right at your doorstep.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
