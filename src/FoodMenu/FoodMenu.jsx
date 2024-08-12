import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FoodMenu.css';
import Biriyani from '../images/FoodMenuImages/Biryani.png';
import Vada from '../images/FoodMenuImages/Vada.png';
import Poori from '../images/FoodMenuImages/Poori.png';
import Uttapam from '../images/FoodMenuImages/Uttapam.png';
import Gulabjamun from '../images/FoodMenuImages/Gulabjamun.png';
import Puttu from '../images/FoodMenuImages/Puttu.png';
import Idli from '../images/FoodMenuImages/Idli.png';
import Dosa from '../images/FoodMenuImages/Dosa.png';
import SouthIndian from '../images/FoodMenuImages/SouthIndian.png';
import Appam from '../images/FoodMenuImages/Appam.png';

const FoodMenu = () => {
  const menuItems = [
    { name: 'Idli', image: Idli },
    { name: 'Vada', image: Vada },
    { name: 'Poori', image: Poori },
    { name: 'Uttapam', image: Uttapam },
    { name: 'Dosa', image: Dosa },
    { name: 'South Indian', image: SouthIndian },
    { name: 'Appam', image: Appam },
    { name: 'Biriyani', image: Biriyani },
    { name: 'Puttu', image: Puttu },
    { name: 'Gulabjamun', image: Gulabjamun },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleItemClick = (name) => {
    switch (name) {
      case 'Biriyani':
        navigate('/biryani');
        break;

        case 'Vada':
          navigate('/vada');
        break;
      
        case 'Poori':
        navigate('/PooriPage');
        break;

      case 'Uttapam':
        navigate('/Uttapam');
        break;

      case 'Gulabjamun':
        navigate('/Gulabjam');
        break;

      case 'Puttu':
        navigate('/Puttu');
        break;

      case 'Idli':
        navigate('/Idli');
        break;

      case 'Dosa':
        navigate('/Dosa');
        break;

      case 'South Indian':
        navigate('/South');
        break;

      case 'Appam':
        navigate('/appam');
        break;

      default:
        break;
    }
  };

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="food-menu-container">
      <input
        type="text"
        placeholder="Search for food..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="food-menu">
        {filteredItems.map((item) => (
          <div key={item.name} className="menu-item" onClick={() => handleItemClick(item.name)}>
            <img src={item.image} alt={item.name} className="menu-image" />
            <p className="menu-text">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
