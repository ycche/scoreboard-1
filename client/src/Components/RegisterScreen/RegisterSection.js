import React from 'react'
import validateInfo from "./validateInfo"
import useForm from './useForm'
import {Link} from 'react-router-dom'
import './RegisterSection.css'
const RegisterSection = ({submitForm}) => {
  const {handleChange,handleSubmit,values, errors} = useForm(submitForm, validateInfo);
  return (
    <div className = "RegisterContainer">
        <div className = "RegisterContent">
        <div className = 'RegisterTextWrapper'>
            <p className = 'CreateText'>
                Create an account
            </p>
            <p className = 'CreateLogin'>
                or 
            </p>
            <Link to = {'/login'} className = 'CreateLoginLink'>
                    log in
            </Link>
        </div>
        <form onSubmit={handleSubmit} className = "RegisterForm">

            <div className = "RegisterInputs">
                <label htmlFor="email" className = "RegisterLabel">
                </label>
                <input type="text" name="email" placeholder = "Email" value = {values.email} onChange={handleChange} className = "RegisterInput">
                {errors.firstName && <p className = "ErrorMessage">{errors.email}</p>}
                </input>
            </div>

            <div className = "RegisterInputs">
                <label htmlFor="password" className = "RegisterLabel">
                </label>
                <input type="password" name="password" placeholder = "Password" value = {values.password} onChange={handleChange} className = "RegisterInput">
                {errors.password && <p className = "ErrorMessage">{errors.password}</p>}
                </input>
            </div>
            
            <div className = "RegisterButtonWrapper">
                <input type="submit" value="Register" className="RegisterButton"/>
            </div>
        </form>
        </div>
    </div>
  )
}

export default RegisterSection
