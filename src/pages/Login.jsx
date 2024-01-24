import React, { useState } from 'react';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a request to your server to authenticate the user's credentials
      const response = await axios.post('http://localhost:2000/login', {
        email,
        password,
      });
      console.log('Authentication successful:', response.data);

    } catch (err) {
      setError('Invalid credentials. Please try again.');
      console.error('Authentication failed:', err.message);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">  Email address            </label>
            <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
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

        <button type="submit" className="btn btn-primary">
            Submit
        </button>
    </form>

  );
}

export default Login;

