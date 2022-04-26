export default function validateInfo(values){
  let errors = {};

  if (!values.name.trim()){
    errors.name = "Name required"
  }

  return errors;
}
