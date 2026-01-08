import React, { useState } from 'react';

export default function AuthModal({ onClose, setUser }) {
  const [isLogin, setIsLogin] = useState(false); // Default to Sign Up

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy Auth Logic
    const userData = { name: "John Doe", email: "john@example.com" };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    onClose();
  };

  return (
    <div className="vf-modal-overlay">
      <div className="vf-modal-content">
        <button className="vf-close-btn" onClick={onClose}>&times;</button>
        
        <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
        <p>{isLogin ? 'Login to manage your bookings' : 'Join Venuefy to start booking events'}</p>

        <form onSubmit={handleSubmit} className="vf-auth-form">
          {!isLogin && <input type="text" placeholder="Full Name" required />}
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          
          <button type="submit" className="vf-btn vf-signup">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="vf-auth-footer">
          {isLogin ? (
            <p>Don't have an account? <span onClick={() => setIsLogin(false)}>Sign Up</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => setIsLogin(true)}>Login</span></p>
          )}
        </div>
      </div>
    </div>
  );
}