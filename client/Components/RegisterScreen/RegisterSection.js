import React from 'react'
import validateInfo from "./validateInfo"
import useForm from './useForm'
function LoginSection() {
const {handleChange, values,handleSubmit,errors} = useForm(submitForm, validateInfo);
  return (
    <div class = "LoginContainer">
        <form onSubmit={handleSubmit} class = "LoginForm">
            <div class = "LoginInputs">
                <label htmlFor="email" class = "LoginLabel">
                    Username/Email:
                </label>
                <input type="text" name="email" placeholder = "Enter your e-mail" value = {values.email} onChange={handleChange} class = "LoginInput">
                {errors.firstName && <p class = "ErrorMessage">{errors.email}</p>}
                </input>
            </div>
            <div class = "LoginInputs">
                <label htmlFor="Password" class = "LoginLabel">
                    Password:
                </label>
                <input type="text" name="Password" placeholder = "Enter your password" value = {values.password} onChange={handleChange} class = "LoginInput">
                {errors.password && <p class = "ErrorMessage">{errors.password}</p>}
                </input>
                <div class = "LoginButtonWrapper">
                    <input type="submit" value="Login"/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default LoginSection
