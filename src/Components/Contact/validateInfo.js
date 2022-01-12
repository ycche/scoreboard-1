export default function validateInfo(values){
  let errors = {};

  if (!values.firstName.trim()){
    errors.firstName = "First name required"
  }
  if (!values.email.trim()){
    errors.email = "Email required"
  }
  if (!values.description.trim()){
    errors.description = "Inquiry information required"
  }
  return errors;
}
