import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useForm = (callback,validateInfo) => {
  const [values, setValues] = useState({
    email: '',
    password : '',
  })

  const [errors,setErrors] = useState({

  })
  
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = e => {
    const {name, value} = e.target
    setValues({
      ...values,
      [name] : value
    })
  }
  const handleSubmit = e =>{
    e.preventDefault();
    setErrors(validateInfo(values))
    setIsSubmitting(true);
  }
  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting){
      axios.post('/register', values).then(res => navigate('/login')).catch(res => console.log(res.data))
    }
  },[errors])
  return {handleChange,values,handleSubmit,errors};
}
export default useForm;