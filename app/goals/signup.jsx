import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
    } else {
      alert('Form submitted successfully!');
    }
  };

  return (
    <>
      <style jsx>{`
        .signup-form-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 450px;
          margin: 60px auto;
          padding: 40px;
          border-radius: 12px;
          background-color: #ffffff;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .signup-form-container:hover {
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.15);
        }

        h2 {
          font-size: 28px;
          color: #333;
          margin-bottom: 30px;
          font-weight: 700;
          text-align: center;
          letter-spacing: 1px;
        }

        .form-group {
          width: 100%;
          margin-bottom: 20px;
        }

        .form-group label {
          font-size: 16px;
          color: #555;
          margin-bottom: 8px;
          display: block;
          font-weight: 500;
        }

        input[type='text'],
        input[type='email'],
        input[type='password'] {
          width: 100%;
          padding: 14px;
          font-size: 16px;
          border-radius: 8px;
          border: 1px solid #000000ff;
          background-color: #c8cbceff;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        input[type='text']:focus,
        input[type='email']:focus,
        input[type='password']:focus {
          border: 1px solid #e66060ff;
          outline: none;
          box-shadow: 0 0 6px rgba(74, 144, 226, 0.4);
        }

        input::placeholder {
          color: #888;
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          font-size: 18px;
          background-color: #4a90e2;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #357abd;
        }

        .alert {
          background-color: #00bb00ff;
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

      <div className="signup-form-container">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
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
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm your password"
            />
          </div>
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
