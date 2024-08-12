// import React from 'react';
// import './Navbar.css';
// import logo from './../images/Navbarimage/logo.png';
// import { Link } from 'react-router-dom';
// import { FaShippingFast, FaShoppingCart, FaUser } from 'react-icons/fa';

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <div className="navbar-logo">
//                 <Link to="/"><img src={logo} alt="HDine Logo" /></Link>
//             </div>

//             <ul className="navbar-links">
//                 <li><Link to="/FoodMenu">OurFoods</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/HomeChef">Home Chef</Link></li>
//                 <li><Link to="/deliverypartner">Delivery Partner</Link></li>
//             </ul>

//             <div className="icons-menu">
//                 <div className="icon-item">
//                     <Link to="/TrackOrder" className="icon-link">
//                         <FaShippingFast className="icon" />
//                     </Link>
//                 </div>
//                 <div className="icon-item">
//                     <Link to="/cart" className="icon-link">
//                         <FaShoppingCart className="icon" />
//                     </Link>
//                 </div>
//                 <div className="icon-item">
//                     <Link to="/LoginForm" className="icon-link">
//                         <FaUser className="icon" />
//                     </Link>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './../images/Navbarimage/logo.png';
import { Link } from 'react-router-dom';
import { FaShippingFast, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        // Fetch the cart from localStorage and update the cart count
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        setCartCount(totalItems);
    }, []);

    useEffect(() => {
        const handleStorageChange = () => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            setCartCount(totalItems);
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/"><img src={logo} alt="HDine Logo" /></Link>
            </div>

            <ul className="navbar-links">
                <li><Link to="/FoodMenu">OurFoods</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/HomeChef">Home Chef</Link></li>
                <li><Link to="/deliverypartner">Delivery Partner</Link></li>
            </ul>

            <div className="icons-menu">
                <div className="icon-item">
                    <Link to="/TrackOrder" className="icon-link">
                        <FaShippingFast className="icon" />
                    </Link>
                </div>
                <div className="icon-item cart-icon-item">
                    <Link to="/cart" className="icon-link">
                        <FaShoppingCart className="icon" />
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </Link>
                </div>
                <div className="icon-item">
                    <Link to="/LoginForm" className="icon-link">
                        <FaUser className="icon" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


