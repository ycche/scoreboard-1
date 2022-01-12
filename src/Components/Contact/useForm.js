import {useState, useEffect} from 'react';
import axios from 'axios';

const useForm = (callback,validateInfo,submitForm) => {
  const [values, setValues] = useState({
    firstName: '',
    email: '',
    type : '',
    description : ''
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
  const handleSubmit = e =>{
    e.preventDefault();

    setErrors(validateInfo(values))
    setIsSubmitting(true);
  }
  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting){
      console.log(values);
      callback();
      axios.post('http://localhost:5000/inquiry/add', values)
        .then(res => console.log(res.data))


    }
  },[errors])
  return {handleChange,values,handleSubmit,errors};
}
export default useForm;
