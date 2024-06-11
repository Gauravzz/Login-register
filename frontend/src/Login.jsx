import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   // State variables to store email and password input values
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate(); // Hook to programmatically navigate to different routes

   // Function to handle form submission
   const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Make a POST request to the login endpoint with email and password
    axios.post('http://localhost:3000/login', { email, password })
    .then(result => {
      console.log(result.data); // Log the response data
      // Check if the response data indicates a successful login
      if (result.data === "Logged") {
        navigate("/home"); // Navigate to the home page
      }
    }).catch(err => console.log(err)); // Log any errors
   };

  return (
    <> 
      <div>
        <h3>Login</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div className="form-body">
            <div>
              <label>Email </label>
              <input 
                type="email" 
                id="email" 
                placeholder="Email" 
                name='email' 
                onChange={(e) => setEmail(e.target.value)} // Update email state on input change
              />
            </div>
            <div>
              <label>Password </label>
              <input 
                type="password" 
                name='password' 
                id="password" 
                placeholder="Password" 
                onChange={(e) => setPassword(e.target.value)} // Update password state on input change
              />
            </div>
          </div>
          <div className="footer">
            <input type='submit' value="Login"/> 
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;