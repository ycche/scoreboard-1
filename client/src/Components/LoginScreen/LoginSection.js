import React from 'react'
import validateInfo from "./validateInfo"
import useForm from './useForm'
function LoginSection({submitForm}) {
const {handleChange, values,handleSubmit,errors} = useForm(submitForm, validateInfo);
  return (
    <div className = "LoginContainer">
        <form onSubmit={handleSubmit} className = "LoginForm">
            <div className = "LoginInputs">
                <label htmlFor="email" className = "LoginLabel">
                    Username/Email:
                </label>
                <input type="text" name="email" placeholder = "Enter your e-mail" value = {values.email} onChange={handleChange} className = "LoginInput">
                {errors.firstName && <p className = "ErrorMessage">{errors.email}</p>}
                </input>
            </div>
            <div className = "LoginInputs">
                <label htmlFor="password" className = "LoginLabel">
                    Password:
                </label>
                <input type="password" name="password" placeholder = "Enter your password" value = {values.password} onChange={handleChange} className = "LoginInput">
                {errors.password && <p className = "ErrorMessage">{errors.password}</p>}
                </input>
                <div className = "LoginButtonWrapper">
                    <input type="submit" value="Login"/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default LoginSection
