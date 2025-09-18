import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      alert('Logged in successfully!');
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <>
      <style jsx>{`
        .login-form-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 400px;
          margin: 50px auto;
          padding: 20px;
          border-radius: 10px;
          background-color: #f9f9f9;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        h2 {
          font-size: 24px;
          color: #333;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .form-group {
          width: 100%;
          margin-bottom: 15px;
        }

        .form-group label {
          font-size: 14px;
          color: #555;
          margin-bottom: 5px;
          display: block;
        }

        input[type='email'],
        input[type='password'] {
          width: 100%;
          padding: 10px;
          font-size: 16px;
          border-radius: 5px;
          border: 1px solid #ddd;
          background-color: #fff;
          transition: border 0.3s ease;
        }

        input[type='email']:focus,
        input[type='password']:focus {
          border: 1px solid #007bff;
          outline: none;
        }

        button {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #0056b3;
        }

        .alert {
          background-color: #f44336;
          color: white;
          padding: 10px;
          text-align: center;
          border-radius: 5px;
          margin-top: 10px;
        }

        .alert-success {
          background-color: #4caf50;
        }

        .alert-warning {
          background-color: #ff9800;
        }
      `}</style>

      <div className="login-form-container">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
