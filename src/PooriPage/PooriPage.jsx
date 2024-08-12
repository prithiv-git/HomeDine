// import React, { useState } from 'react';
// import './PooriPage.css';

// import Poori1 from '../images/PooriImages/Poori1.png';
// import MalaiPoori from '../images/PooriImages/Malai Poori.png';
// import PaaniPoori from '../images/PooriImages/PaaniPoori.png';
// import PelPoori from '../images/PooriImages/PelPoori.png';

// const PooriPage = () => {
//   const menuItems = [
//     {
//       name: 'Shiva Home Food',
//       dishName: 'Poori with Potato Masala',
//       image: Poori1,
//       rating: 4.7,
//       time: '30-35 mins',
//       price: '₹145',
//       discount: '10% OFF',
//       location: 'Kuniyamuthur',
//     },
//     {
//       name: 'Kenns Kitchen',
//       dishName: 'Malai Poori',
//       image: MalaiPoori,
//       rating: 4.3,
//       time: '50-55 mins',
//       price: '₹79',
//       discount: 'ITEMS AT',
//       location: 'South Indian, Beverages RS Puram',
//     },
//     {
//       name: 'KR Chats',
//       dishName: 'Paani Poori',
//       image: PaaniPoori,
//       rating: 4.6,
//       time: '50-55 mins',
//       price: '₹78',
//       discount: 'ITEMS AT',
//       location: 'Beverages, South Indian Gandhipuram',
//     },
//     {
//       name: 'Hotel Sri',
//       dishName: 'Pel Poori',
//       image: PelPoori,
//       rating: 3.9, 
//       time: '40-45 mins',
//       price: '₹47',
//       discount: 'ITEMS AT',
//       location: 'South Indian, Vadavalli',
//     },
//     // Add other menu items similarly
//   ];

//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredItems = menuItems.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="biryani-menu-container">
//       <input
//         type="text"
//         placeholder="Search for Poori..."
//         value={searchTerm}
//         onChange={handleSearch}
//         className="search-bar"
//       />

//       <div className="biryani-menu">
//         {filteredItems.map((item) => (
//           <div key={item.name} className="menu-item">
//             <img src={item.image} alt={item.name} className="menu-image" />
//             <div className="menu-details">
//               <div className="discount">{item.discount} UPTO {item.price}</div>
//               <p className="menu-title">{item.name}</p>
//               <p className="dish-name">{item.dishName}</p>
//               <p className="menu-info">{item.rating} • {item.time}</p>
//               <p className="menu-location">{item.location}</p>
//               <button className="order-now-button">Order Now</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PooriPage;



import React, { useState } from 'react';
import './PooriPage.css';

import Poori1 from '../images/PooriImages/Poori1.png';
import MalaiPoori from '../images/PooriImages/Malai Poori.png';
import PaaniPoori from '../images/PooriImages/PaaniPoori.png';
import PelPoori from '../images/PooriImages/PelPoori.png';

const PooriPage = () => {
  const menuItems = [
    {
      name: 'Shiva Home Food',
      dishName: 'Poori with Potato Masala',
      image: Poori1,
      rating: 4.7,
      time: '30-35 mins',
      price: '₹145',
      discount: '10% OFF',
      location: 'Kuniyamuthur',
    },
    {
      name: 'Kenns Kitchen',
      dishName: 'Malai Poori',
      image: MalaiPoori,
      rating: 4.3,
      time: '50-55 mins',
      price: '₹79',
      discount: 'ITEMS AT',
      location: 'South Indian, Beverages RS Puram',
    },
    {
      name: 'KR Chats',
      dishName: 'Paani Poori',
      image: PaaniPoori,
      rating: 4.6,
      time: '50-55 mins',
      price: '₹78',
      discount: 'ITEMS AT',
      location: 'Beverages, South Indian Gandhipuram',
    },
    {
      name: 'Hotel Sri',
      dishName: 'Pel Poori',
      image: PelPoori,
      rating: 3.9, 
      time: '40-45 mins',
      price: '₹47',
      discount: 'ITEMS AT',
      location: 'South Indian, Vadavalli',
    },
    // Add other menu items similarly
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));

    // Trigger a storage event to update the cart count in Navbar
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="biryani-menu-container">
      <input
        type="text"
        placeholder="Search for Poori..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />

      <div className="biryani-menu">
        {filteredItems.map((item) => (
          <div key={item.name} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-image" />
            <div className="menu-details">
              <div className="discount">{item.discount} UPTO {item.price}</div>
              <p className="menu-title">{item.name}</p>
              <p className="dish-name">{item.dishName}</p>
              <p className="menu-info">{item.rating} • {item.time}</p>
              <p className="menu-location">{item.location}</p>
              <button 
                className="order-now-button"
                onClick={() => addToCart(item)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PooriPage;

