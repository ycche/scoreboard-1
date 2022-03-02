import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useForm = (callback,validateInfo,submitForm) => {
  const [values, setValues] = useState({
    email: '',
    password : '',
  })

  const [errors,setErrors] = useState({

  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = e => {
    const {name, value} = e.target
    setValues({
      ...values,
      [name] : value
    })
  }
  const navigate = useNavigate();
  const handleSubmit = e =>{
    e.preventDefault();

    setErrors(validateInfo(values))
    setIsSubmitting(true);
  }
  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting){
      axios.post('/login', values)
        .then(res => {
          navigate('/home')
          sessionStorage.setItem('Auth', 'False')
        })
        .catch(res => console.log("Bad login"))
    }
  },[errors])
  return {handleChange,values,handleSubmit,errors};
}
export default useForm;