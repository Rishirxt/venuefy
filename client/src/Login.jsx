import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            const res = await axios.post('http://localhost:3001/login', { email, password })
            localStorage.setItem('user', JSON.stringify(res.data))
            navigate('/')
        } catch (err) {
            if (err.response && err.response.status === 401) setError('Invalid email or password')
            else if (err.response && err.response.data && err.response.data.message) setError(err.response.data.message)
            else setError('Unable to login, try again later')
        }
    }

    return (
        <div className="vf-form-wrap">
            <form className="vf-form" onSubmit={handleSubmit}>
                <h2>Welcome back</h2>
                <p className="vf-small">Sign in to continue to Venuefy</p>

                <div className="vf-field">
                    <label className="vf-small">Email</label>
                    <input className="vf-input" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>

                <div className="vf-field">
                    <label className="vf-small">Password</label>
                    <input className="vf-input" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </div>

                <button className="vf-submit" type="submit">Login</button>
                {error && <p style={{ color: 'salmon', marginTop: 10 }}>{error}</p>}

                <p style={{ marginTop: 12 }} className="vf-small">New to Venuefy? <Link to="/register">Create an account</Link></p>
            </form>
        </div>
    )
}

export default Login