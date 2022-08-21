import { Link, useHref } from 'react-router-dom';
import "./login.css"

export default function Login() {

  const userRef = useHref();
  const passwordRef = useRef();

  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <div className='login'>
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" className='loginInput' placeholder='Enter your username...' />
        <label>Password</label>
        <input type="password" className='loginInput' placeholder='Enter your password...' />
        <button className="loginButton" type='submit'>Login</button>
      </form>
      <button className="loginRegisterButton" >
        <Link className="link" to='/register' >Register</Link>
      </button>
    </div>
  );
}
