import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the server to authenticate the user's credentials
      const response = await axios.post('http://localhost:2000/login', {
        email,
        password,
      });

      // Check the response status to determine if login was successful
      if (response.status === 200) {
        console.log('Authentication successful');
        // Navigate to the home page or another route upon successful login
        navigate('/userprojects');
      } else {
        setError('Invalid credentials. Please try again.');
        console.error('Authentication failed:', response.data.message);
      }
    } catch (err) {
      setError('Invalid credentials. Please try again.');
      console.error('Authentication failed:', err.message);
    }
  };


  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <form className="w-25">
        {error && <div className="alert alert-danger text-center">{error}</div>}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
  </div>

  );
}

export default Login;

