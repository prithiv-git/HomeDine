// import React from "react";
// import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
// import "./PaymentPage.css";
// import UPIImage from '../images/UPILOGO/UPI1.png';

// const PaymentPage = () => {
//   const navigate = useNavigate(); // Initialize the navigate hook

//   const handleAddNewUPI = () => {
//     navigate('/UpiPage'); // Navigate to the UpiPage when the button is clicked
//   };

//   const handleAddNewCard = () => {
//     navigate('/AddNewCard'); // Navigate to the AddNewCard page when the button is clicked
//   };

//   return (
//     <div className="payment-container">
//       <section className="payment-section">
//         <h3 className="payment-title">
//           <img src={UPIImage} alt="Pay" />
//           Pay by any UPI App
//         </h3>
        
//         <div className="payment-option">
//           <button className="add-new-btn" onClick={handleAddNewUPI}>+ Add New UPI ID</button>
//           <p className="payment-description">You need to have a registered UPI ID</p>
//         </div>
//       </section>

//       <section className="payment-section">
//         <h3 className="payment-title">Credit & Debit Cards</h3>
//         <div className="payment-option">
//           <button className="add-new-btn">+ Add New Card</button>
//           <p className="payment-description">Save and Pay via Cards.</p>
//         </div>
//       </section>

//       <section className="payment-section">
//         <h3 className="payment-title">More Payment Options</h3>
//         <div className="payment-option-list">
//           <div className="payment-option">
//             <button className="payment-option-btn">Wallets</button>
//             <p className="payment-description">Paytm, PhonePe, Amazon Pay & more</p>
//           </div>
          
//           <div className="payment-option">
//             <button className="payment-option-btn">Netbanking</button>
//             <p className="payment-description">Select from a list of banks</p>
//           </div>
//           <div className="payment-option">
//             <button className="payment-option-btn">Pay on Delivery</button>
//             <p className="payment-description">Pay in cash or pay online</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PaymentPage;



import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "./PaymentPage.css";
import UPIImage from '../images/UPILOGO/UPI1.png';

const PaymentPage = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleAddNewUPI = () => {
    navigate('/UpiPage'); // Navigate to the UpiPage when the button is clicked
  };

  const handleAddNewCard = () => {
    navigate('/AddNewCard'); // Navigate to the AddNewCard page when the button is clicked
  };

  return (
    <div className="payment-container">
      <section className="payment-section">
        <h3 className="payment-title">
          <img src={UPIImage} alt="Pay" />
          Pay by any UPI App
        </h3>
        
        <div className="payment-option">
          <button className="add-new-btn" onClick={handleAddNewUPI}>+ Add New UPI ID</button>
          <p className="payment-description">You need to have a registered UPI ID</p>
        </div>
      </section>

      <section className="payment-section">
        <h3 className="payment-title">Credit & Debit Cards</h3>
        <div className="payment-option">
          <button className="add-new-btn" onClick={handleAddNewCard}>+ Add New Card</button>
          <p className="payment-description">Save and Pay via Cards.</p>
        </div>
      </section>

      <section className="payment-section">
        <h3 className="payment-title">More Payment Options</h3>
        <div className="payment-option-list">
          <div className="payment-option">
            <button className="payment-option-btn">Wallets</button>
            <p className="payment-description">Paytm, PhonePe, Amazon Pay & more</p>
          </div>
          
          <div className="payment-option">
            <button className="payment-option-btn">Netbanking</button>
            <p className="payment-description">Select from a list of banks</p>
          </div>
          <div className="payment-option">
            <button className="payment-option-btn">Pay on Delivery</button>
            <p className="payment-description">Pay in cash or pay online</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentPage;
