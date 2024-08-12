import React, { useState } from 'react';
import './HomeChefRegistrationForm.css';

const HomeChefRegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNo: '',
        kitchenAddress: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
        setIsSubmitted(true); // Show the success message
    };

    return (
        <div className="registration-form-container">
            <h2>Register as a Home Chef</h2>
            <form onSubmit={handleSubmit} className="registration-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
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
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contactNo">Contact No</label>
                    <input
                        type="tel"
                        id="contactNo"
                        name="contactNo"
                        value={formData.contactNo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="kitchenAddress">Kitchen Address</label>
                    <textarea
                        id="kitchenAddress"
                        name="kitchenAddress"
                        value={formData.kitchenAddress}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="register-button">Submit</button>
            </form>

            {isSubmitted && (
                <div className="submission-message">
                    Your form has been successfully submitted!
                </div>
            )}
        </div>
    );
};

export default HomeChefRegistrationForm;


// import React, { useState } from "react";
// import "./HomeChefRegistrationForm.css";

// const HomeChefRegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     contactNumber: "",
//     email: "",
//     address: "",
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("http://localhost:8080/api/chefs/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Success:", data);
//         setIsSubmitted(true);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   return (
//     <div className="home-chef-registration">
//       <h2>Register as Home Chef</h2>
//       {isSubmitted ? (
//         <div className="success-message">You have registered successfully!</div>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="contactNumber">Contact Number</label>
//             <input
//               type="tel"
//               id="contactNumber"
//               name="contactNumber"
//               value={formData.contactNumber}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email ID</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="address">Address</label>
//             <textarea
//               id="address"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" className="register-btn">Register</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default HomeChefRegistrationForm;
