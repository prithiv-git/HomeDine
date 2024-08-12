// import React from "react";
// import { Link } from "react-router-dom";
// import './LoginForm.css';

// const Login = () => {
//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h3>Login</h3>
//         <form className="form">
//           <div className="input-group">
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
//               placeholder="Enter your Password"
//             />
//             <br></br>
//             <button type="submit" className="btn btn-primary">
//               Login
//             </button>
//           </div>
//         </form>
//         <div className="signup-link">
//           <p>Don't have an Account? </p>
//           <Link to="/signup" className="btn btn-success">
//             Sign Up
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import React from "react";
// import "../styles/Login.css";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h3>Sign in</h3>
//         <form className="form">
//           <div className="input-group">
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
//               placeholder="Enter your Password"
//             />
//             <br></br>
//             <button type="submit" className="btn btn-primary">
//               Login
//             </button>
//           </div>
//         </form>
//         <div className="signup-link">
//           <p>Don't have an Account? </p>
//           <Link to="/signup" className="btn btn-success">
//             Sign Up
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginForm.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
      const response = await axios.post("http://localhost:8080/api/users/login", formData);
      console.log("User logged in:", response.data);
      navigate("/");
    } catch (error) {
      console.error("There was an error logging in:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h3>Sign in</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
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
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
            />
            <br />
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        <div className="signup-link">
          <p>Don't have an Account? </p>
          <Link to="/signup" className="btn btn-success">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
