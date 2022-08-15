import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./register.css"

export default function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='register'>
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className='registerInput'
          placeholder='Enter your username...'
          onChange={e => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className='registerInput'
          placeholder='Enter your email...'
          onChange={e => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className='registerInput'
          placeholder='Enter your password...'
          onChange={e => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
      </button>
    </div>
  );
}
