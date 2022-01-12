import {useState, useEffect} from 'react';
import axios from 'axios';

const useForm = (callback,validateInfo,submitForm) => {
  const [values, setValues] = useState({
    email: '',
    password : '',
  })

  const [errors,setErrors] = useState(false)
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
    if(!errors && isSubmitting){
      console.log(values);
      callback();
      axios.post('/register', values)
        .then(res => console.log(res.data))
    }
  },[errors])
  return {handleChange,values,handleSubmit,errors};
}
export default useForm;