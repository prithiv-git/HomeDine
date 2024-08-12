import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SliderComponent from './components/Slider/Slider.jsx';
import About from './About/about.jsx';
import AddNewCard from './AddNewCardPage/AddNewCard.jsx';
import HomeChef from './Homechef/homechef.jsx';
import Home from './components/pages/Home';
import Navbar from '../src/Navbar/Navbar.jsx';
import LoginForm from '../src/components/LoginForm/LoginForm.jsx';
import Signup from './SignUpPage/SignUp.jsx';
import Footer from './Footer/Footer.jsx';
import FoodMenu from './FoodMenu/FoodMenu.jsx';
import PaymentPage from './PaymentPage/PaymentPage.jsx';
import UpiPage from './PaymentPage/UpiPage.jsx';
import TrackOrder from './TrackOrder/TrackOrder.jsx';
import Biriyani from './Biriyanipage/Biriyani.jsx';
import DeliveryPartner from './DeliveryPartnerPage/DeliveryPartner.jsx';
import RegisterPage from './RegisterationPages/Registerpage.jsx';
import HomeChefRegistrationForm from './RegisterationPages/HomeChefRegistrationForm.jsx'; 
import Vada from './VadaPage/Vada.jsx';
import PooriPage from './PooriPage/PooriPage.jsx';
import Uttapam from './UttapamPage/Uttapam.jsx';
import Gulabjam from './GulabjamPage/Gulabjam.jsx';
import Puttu from './PuttuPage/Puttu.jsx';
import Idli from './IdliPage/Idli.jsx';
import Dosa from './ThosaPage/Dosa.jsx';
import South from './SouthFoodPage/South.jsx';
import Appam from './AppamPage/Appam.jsx';
import Cart from './CartPage/Cart';
import DeliveryAddressPage from './DeliveryAddressPage/DeliveryAddressPage.jsx';

const App = () => {
    return (
      
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AddNewCard" element={<AddNewCard />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/Appam" element={<Appam/>} />
                <Route path="/Biryani" element={<Biriyani/>} />
                <Route path="/Slider" element={<SliderComponent />} />
                <Route path="/LoginForm" element={<LoginForm />} />
                <Route path="/SignUp" element={<Signup />} />
                <Route path="/about" element={<About />} />
                <Route path="/homechef" element={<HomeChef />} />
                <Route path="/Gulabjam" element={<Gulabjam />} />
                <Route path="/deliverypartner" element={<DeliveryPartner />} />
                <Route path="/PooriPage" element={<PooriPage />} />
                <Route path="/Puttu" element={<Puttu />} />
                <Route path="/PaymentPage" element={<PaymentPage />} />
                <Route path="/Idli" element={<Idli />} />
                <Route path="/Dosa" element={<Dosa />} />
                <Route path="/RegisterPage" element={<RegisterPage />} />
                <Route path="/South" element={<South />} />
                <Route path="/Vada" element={<Vada />} />
                <Route path="/homechefregister" element={<HomeChefRegistrationForm />} /> {/* Add the new route */}
                <Route path="/FoodMenu" element={<FoodMenu />} />
                <Route path="/UpiPage" element={<UpiPage />} />
                <Route path="/Uttapam" element={<Uttapam />} />
                <Route path="/TrackOrder" element={<TrackOrder />} />
                <Route path="/DeliveryAddressPage" element={<DeliveryAddressPage />} />
                


            </Routes>
            <Footer/>
        </Router>
    );
};

export default App;
