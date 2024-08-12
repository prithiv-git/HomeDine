// import React, { useState } from "react";
// import "./DeliveryAddressPage.css";

// const DeliveryAddressPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     address: "",
//     city: "",
//     state: "",
//     postalCode: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle the form submission logic
//     console.log("Delivery Address:", formData);
//     // You can add navigation to the next step or page
//   };

//   return (
//     <div className="delivery-container">
//       <h2>Deliver to This Address</h2>
//       <form onSubmit={handleSubmit} className="delivery-form">
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="address">Address:</label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="contactNumber">Contact Number:</label>
//           <input
//             type="text"
//             id="contactNumber"
//             name="contactNumber"
//             value={formData.contactNumber}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="city">City:</label>
//           <input
//             type="text"
//             id="city"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             required
//           />
//         </div>


//         <div className="form-group">
//           <label htmlFor="postalCode">Postal Code:</label>
//           <input
//             type="text"
//             id="postalCode"
//             name="postalCode"
//             value={formData.postalCode}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button  className="submit-btn">
//          Proceed to pay
//         </button>
//       </form>
//     </div>
//   );
// };

// export default DeliveryAddressPage;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DeliveryAddressPage.css";

const DeliveryAddressPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    contactNumber: "",
  });

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic
    console.log("Delivery Address:", formData);

    // Navigate to the PaymentPage
    navigate("/PaymentPage");
  };

  return (
    <div className="delivery-container">
      <h2>Deliver to This Address</h2>
      <form onSubmit={handleSubmit} className="delivery-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="postalCode">Postal Code:</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Proceed to pay
        </button>
      </form>
    </div>
  );
};

export default DeliveryAddressPage;
