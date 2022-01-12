import React from 'react'
import validateInfo from "./validateInfo"
import useForm from './useForm'
function RegisterSection() {
const {handleChange, values,handleSubmit,errors} = useForm(submitForm, validateInfo);
  return (
    <div class = "RegisterContainer">
        <form onSubmit={handleSubmit} class = "RegisterForm">
            <div class = "RegisterInputs">
                <label htmlFor="E-mail" class = "RegisterLabel">
                    Username/Email:
                </label>
                <input type="text" name="E-mail" placeholder = "Enter your e-mail" value = {values.email} onChange={handleChange} class = "RegisterInput">
                {errors.firstName && <p class = "ErrorMessage">{errors.email}</p>}
                </input>
            </div>
            <div class = "RegisterInputs">
                <label htmlFor="Password" class = "RegisterLabel">
                    Password:
                </label>
                <input type="text" name="Password" placeholder = "Create password" value = {values.password} onChange={handleChange} class = "RegisterInput">
                {errors.password && <p class = "ErrorMessage">{errors.password}</p>}
                </input>
                <div class = "RegisterButtonWrapper">
                    <input type="submit" value="Register"/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default RegisterSection
