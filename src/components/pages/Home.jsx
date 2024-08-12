import React from 'react';
import './Home.css'; 
import { Link } from 'react-router-dom';
import foodImage from '../../images/Homeimage/Homepageimage.png'; // or '/mnt/data/image.png' if you want to use the newly uploaded image
import SliderComponent from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <div className="home-container">
                <div className="content">
                    <h1>Say goodbye to fast food</h1>
                    <h2>and hello to family-
                        style dinners
                    </h2>
                    <p>Our talented home chefs prepare delicious meals made with locally-sourced ingredients, so you can enjoy home style food in the comfort of your own home.</p>
                    <button className="order-button"><Link to="/FoodMenu">Order Now</Link></button>
                    <div className="contact-info">
                    </div>
                </div>
                
                <div className="image-container">
                    <img src={foodImage} alt="Delicious Food" className="floating-image" />
                </div>
            </div>

            <SliderComponent />
            
            <div className="new-content">
                <div className="new-image-container">
                    {/* <img src={CookingImage} alt="Cooking at Home" className="cooking-image" /> */}
                </div>

                <div className="new-text-container">
                    <h1>We protect nutrients & flavors by cooking properly at homes.</h1>
                    <p>
                        Our home chefs cook like our moms do, proper cooking protects the nutrients and taste with no unwanted ingredients.
                    </p>
                </div>

                <div className="next-button">
                </div>
            </div>

            <div className="new-content">
                <div className="new-image-container">
                </div>

                <div className="new-text-container">
                    <h1>Pre-order your food and avail more offers!!!</h1>
                    <p>
                        We know you are too busy, plan ahead and book your food in advance, we will deliver it on time when you need it.
                    </p>
                </div>

                <div className="next-button">
                    {/* <button className="play-button">&#9654;</button> HTML entity for play icon */}
                </div>
            </div>
        </div>
    );
};

export default Home;
