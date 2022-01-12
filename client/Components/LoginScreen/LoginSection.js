import React from 'react'

function LoginSection() {
const {handleChange, values,handleSubmit,errors} = useForm(submitForm, validateInfo);
  return (
    <div class = "LoginContainer">
        <form onSubmit="handleSubmit()">
            <div class = "LoginInputs">
                <label htmlFor="E-mail">
                    Username/Email:
                </label>
                <input type="text" name="E-mail" placeholder = "Enter your e-mail" value = {values.email} onChange={handleChange}>
                {errors.firstName && <p class = "ErrorMessage">{errors.email}</p>}
                </input>
            </div>
            <div class = "LoginInputs">
                <label htmlFor="Password">
                    Password:
                </label>
                <input type="text" name="Password" placeholder = "Enter your password" value = {values.password} onChange={handleChange}>
                {errors.password && <p class = "ErrorMessage">{errors.password}</p>}
                </input>
            </div>
        </form>

        
        

    </div>
  )
}

export default ContactNavbar
