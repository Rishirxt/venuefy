import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('')
    axios
      .post('http://localhost:3001/register', { name, email, password })
      .then((response) => {
        navigate('/login');
      })
      .catch((error) => {
        setError(error?.response?.data?.message || 'Registration failed')
      });
  };

  return (
    <div className="vf-form-wrap">
      <form className="vf-form" onSubmit={handleSubmit}>
        <h2>Create your account</h2>
        <p className="vf-small">Join Venuefy — movies, concerts, and standup.</p>

        <div className="vf-field">
          <label className="vf-small">Full name</label>
          <input className="vf-input" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="vf-field">
          <label className="vf-small">Email</label>
          <input className="vf-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="vf-field">
          <label className="vf-small">Password</label>
          <input className="vf-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <button className="vf-submit" type="submit">Create account</button>
        {error && <p style={{ color: 'salmon', marginTop: 10 }}>{error}</p>}

        <p style={{ marginTop: 12 }} className="vf-small">Already a member? <Link to="/login">Log in</Link></p>
      </form>
    </div>
  );
}

export default Signup;
