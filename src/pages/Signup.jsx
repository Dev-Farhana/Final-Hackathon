import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // send a request to your server to create a new user account
    // if the signup is successful, store the user's token in local storage
  }

  return (
    <form>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
            </label>
            <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
            Password
            </label>
            <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            />
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
            </label>
        </div>
        <button type="submit" className="btn btn-primary">
            Submit
        </button>
        
        <Link to={'/login'} className="btn btn-info m-3">
            Already have an account Login here.
        </Link>

    </form>

  );
}

export default Signup;
