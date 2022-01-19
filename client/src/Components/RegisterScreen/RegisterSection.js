import React from 'react'
import validateInfo from "./validateInfo"
import useForm from './useForm'
const RegisterSection = ({submitForm}) => {
  const {handleChange,handleSubmit,values, errors} = useForm(submitForm, validateInfo);
  return (
    <div className = "RegisterContainer">
        <form onSubmit={handleSubmit} className = "RegisterForm">

            <div className = "RegisterInputs">
                <label htmlFor="email" className = "RegisterLabel">
                    Username/Email:
                </label>
                <input type="text" name="email" placeholder = "Enter your e-mail" value = {values.email} onChange={handleChange} className = "RegisterInput">
                {errors.firstName && <p className = "ErrorMessage">{errors.email}</p>}
                </input>
            </div>

            <div className = "RegisterInputs">
                <label htmlFor="password" className = "RegisterLabel">
                    Password:
                </label>
                <input type="password" name="password" placeholder = "Create password" value = {values.password} onChange={handleChange} className = "RegisterInput">
                {errors.password && <p className = "ErrorMessage">{errors.password}</p>}
                </input>
            </div>
            
            <div className = "RegisterButtonWrapper">
                <input type="submit" value="Register"/>
            </div>
        </form>
    </div>
  )
}

export default RegisterSection
