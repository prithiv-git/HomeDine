// import React from "react";
// import './SignUp.css';
// import { Link } from "react-router-dom";

// const Signup = () => {
//   return (
//     <div className="signup-page">
//       <div className="addUser">
//         <h3>Sign Up</h3>
//         <form className="addUserForm">
//           <div className="inputGroup">
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               autoComplete="off"
//               placeholder="Enter your name"
//             />
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               autoComplete="off"
//               placeholder="Enter your Email"
//             />
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               autoComplete="off"
//               placeholder="Enter Password"
//             />
//             <button type="submit" className="btn btn-success">
//               Sign Up
//             </button>
//           </div>
//         </form>
//         <div className="login">
//           <p>Already have an Account? </p>
//           <Link to="/login" className="btn btn-primary">
//             Login
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { signUp } from './apiService';
// // import './SignUp.css';

// // const SignUp = () => {
// //     const [name, setName] = useState('');
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');

// //     const handleSignUp = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await signUp({ name, email, password });
// //             alert(response.data);
// //         } catch (error) {
// //             alert('Sign up failed');
// //         }
// //     };

// //     return (
// //         <div className="signup-container">
// //             <div className="signup-form">
// //                 <h3>SIGN UP</h3>
// //                 <form className="form" onSubmit={handleSignUp}>
// //                     <div className="input-group">
// //                         <label htmlFor="name">Name:</label>
// //                         <input
// //                             type="text"
// //                             id="name"
// //                             name="name"
// //                             autoComplete="off"
// //                             placeholder="Enter your name"
// //                             value={name}
// //                             onChange={(e) => setName(e.target.value)}
// //                         />
// //                         <label htmlFor="email">Email:</label>
// //                         <input
// //                             type="email"
// //                             id="email"
// //                             name="email"
// //                             autoComplete="off"
// //                             placeholder="Enter your Email"
// //                             value={email}
// //                             onChange={(e) => setEmail(e.target.value)}
// //                         />
// //                         <label htmlFor="password">Password:</label>
// //                         <input
// //                             type="password"
// //                             id="password"
// //                             name="password"
// //                             autoComplete="off"
// //                             placeholder="Enter Password"
// //                             value={password}
// //                             onChange={(e) => setPassword(e.target.value)}
// //                         />
// //                         <br />
// //                         <button type="submit" className="btn btn-success">
// //                             Sign Up
// //                         </button>
// //                     </div>
// //                 </form>
// //                 <div className="login-link">
// //                     <p>Already have an Account? </p>
// //                     <Link to="/login" className="btn btn-primary">
// //                         Login
// //                     </Link>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default SignUp;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/users/signup", formData);
      console.log("User signed up:", response.data);
      navigate("/");
    } catch (error) {
      console.error("There was an error signing up:", error);
    }
  };

  return (
    <div className="signup-page">
      <div className="addUser">
        <h3>Sign Up</h3>
        <form className="addUserForm"  onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-success" onSubmit={handleSubmit}>
              Sign Up
            </button>
          </div>
        </form>
        <div className="login">
          <p>Already have an Account? </p>
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

