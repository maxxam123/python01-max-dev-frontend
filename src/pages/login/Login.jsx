import "./login.css"
import { useContext, useRef } from "react"
import {loginCall} from "../../apiCalls"
import { AuthContext} from "../../context/AuthContext"

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(email.current.value)
    console.log(password.current.value)
    loginCall(
      {email: email.current.value, password: password.current.value}, 
      dispatch
      );
  };

  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Lamasocial</h3>
            <span className="loginDesc">Connect</span>
        </div>
        <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
                <input required ref={email} type="email" placeholder="Email" className="loginInput"/>  
                <input required ref={password} type="password" placeholder="Password" className="loginInput"/>
                <button className="loginButton" type="submit">Log in</button>
                <span className="loginForgot">Forgot Password</span>
                <button className="loginRegisterButton">Create Account</button>         
            </form>
        </div>
      </div>
    </div>
  )
}

