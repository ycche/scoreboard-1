import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const useForm = (callback,validateInfo,submitForm, setShowModal) => {
  const [values, setValues] = useState({
    name : '',
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
    setErrors(validateInfo(values))
    e.preventDefault();
    setIsSubmitting(true);
  }
  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting){
      setIsSubmitting(false)
      axios.post('/user/board/add', values)
        .then(res => {
            navigate('/home')
        })
        .catch(res => {
        navigate('/home')})
    }
  },[errors, isSubmitting])
  return {handleChange,values,handleSubmit,errors};
}
export default useForm;