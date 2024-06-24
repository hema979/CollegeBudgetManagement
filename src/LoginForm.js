import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    console.log('Attempting login...');
    setError('');

    // Email validation using a simple regex pattern.
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email || !email.match(emailPattern)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Password validation using regex pattern.
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{6,}$/;
    if (!password || !password.match(passwordPattern)) {
      setError('Password must have at least 1 capital letter, 1 small letter, 1 special symbol, and be at least 6 characters long.');
      return;
    }
    navigate("/navlink");
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        // Successful login
        setLoading(true);
        navigate("/navlink");
      } else {
        const responseBody = await response.json();
        setError(responseBody.error || 'An error occurred during login.');
      }
    } catch (error) {
      setError('An error occurred during login.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={handleLogin}
          >
            Login
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
