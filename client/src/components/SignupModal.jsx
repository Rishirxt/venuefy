import React, { useState } from 'react'
import axios from 'axios'

export default function SignupModal({ onClose, onSuccess }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const res = await axios.post('http://localhost:3001/register', { name, email, password })
      if (onSuccess) onSuccess(res.data)
      onClose()
    } catch (err) {
      setError(err?.response?.data?.message || 'Signup failed')
    }
  }

  return (
    <div className="vf-modal">
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
        </form>
      </div>
    </div>
  )
}
