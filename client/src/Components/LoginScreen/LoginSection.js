import React from 'react'
import validateInfo from "./validateInfo"
import useForm from './useForm'
import {Link} from 'react-router-dom'
import './LoginSection.css'
import accessImage from "../../Images/access.svg"
function LoginSection({submitForm}) {
  const {handleChange, values,handleSubmit,errors} = useForm(submitForm, validateInfo);
  return (
    <div className = "LoginContainer">
        <div className = "LoginContent">
        <div className = "login-left-wrapper">
        <div className = "LoginTextWrapper">
        <p className = 'LoginCreateText'>
                Sign in
            </p>
            <p className = 'LoginCreateAccount'>
                or 
            </p>
            <Link to = {'/register'} className = 'CreateRegisterLink'>
                    create an account
            </Link>
        </div>
        <form onSubmit={handleSubmit} className = "LoginForm">
            <div className = "LoginInputs">
                <label htmlFor="email" className = "LoginLabel">
               
                </label>
                <input type="text" name="email" placeholder = "Email" value = {values.email} onChange={handleChange} className = "LoginInput">
                {errors.firstName && <p className = "ErrorMessage">{errors.email}</p>}
                </input>
            </div>
            <div className = "LoginInputs">
                <label htmlFor="password" className = "LoginLabel">
               
                </label>
                <input type="password" name="password" placeholder = "Password" value = {values.password} onChange={handleChange} className = "LoginInput">
                {errors.password && <p className = "ErrorMessage">{errors.password}</p>}
                </input>
                <div className = "LoginButtonWrapper">
                    <input type="submit" value="Login" className = "LoginButton"/>
                </div>
            </div>
        </form>
        </div>
        <div className='login-img-wrapper'>
        <img className = 'login-img' src={accessImage}></img>
    </div>
    </div>

    </div>
  )
}

export default LoginSection
