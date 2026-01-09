import React, { useState } from 'react';
import axios from 'axios';

export default function SignupModal({ onClose, onSuccess, onSwitchToLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:3001/register', { name, email, password });
      if (onSuccess) onSuccess(res.data);
      onClose();
    } catch (err) {
      setError(err?.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="vf-modal">
      <style>{`
        .vf-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .vf-modal-panel {
          background: white;
          border-radius: 16px;
          padding: 40px;
          max-width: 450px;
          width: 100%;
          position: relative;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .vf-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          font-size: 32px;
          line-height: 1;
          cursor: pointer;
          color: #666;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.2s;
        }

        .vf-modal-close:hover {
          background-color: #f3f4f6;
          color: #333;
        }

        .vf-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .vf-form h2 {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 10px 0;
          text-align: center;
        }

        .vf-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .vf-small {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin: 0;
        }

        .vf-input {
          width: 100%;
          padding: 12px 16px;
          font-size: 16px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          outline: none;
          transition: all 0.2s;
          font-family: inherit;
          background: white;
          box-sizing: border-box;
        }

        .vf-input:focus {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }

        .vf-input:hover {
          border-color: #d1d5db;
        }

        .vf-submit {
          width: 100%;
          padding: 14px 24px;
          font-size: 16px;
          font-weight: 600;
          color: white;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 10px;
        }

        .vf-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(239, 68, 68, 0.3);
        }

        .vf-submit:active {
          transform: translateY(0);
        }

        .vf-form p {
          margin: 0;
          font-size: 14px;
          text-align: center;
        }

        @media (max-width: 640px) {
          .vf-modal-panel {
            padding: 30px 20px;
            margin: 20px;
          }
          .vf-form h2 {
            font-size: 24px;
          }
        }
      `}</style>
      <div className="vf-modal-panel">
        <button className="vf-modal-close" onClick={onClose}>×</button>
        <form onSubmit={handleSubmit} className="vf-form">
          <h2>Create account</h2>
          <div className="vf-field">
            <label className="vf-small">Full name</label>
            <input className="vf-input" value={name} onChange={e=>setName(e.target.value)} required />
          </div>
          <div className="vf-field">
            <label className="vf-small">Email</label>
            <input className="vf-input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
          </div>
          <div className="vf-field">
            <label className="vf-small">Password</label>
            <input className="vf-input" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
          </div>
          <button className="vf-submit" type="submit">Create account</button>
          {error && <p style={{color:'salmon'}}>{error}</p>}
          <p style={{textAlign:'center', marginTop:'10px', color:'#666', fontSize:'14px'}}>
            Already have an account?{' '}
            <span 
              onClick={onSwitchToLogin}
              style={{
                color:'#ef4444', 
                fontWeight:'600', 
                cursor:'pointer',
                textDecoration:'underline'
              }}
            >
              Login here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}