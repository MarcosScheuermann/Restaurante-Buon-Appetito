import { useEffect, useState } from "react";

const useForm = (initialValues, submit, validations) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const[submitting, setSubmitting] = useState(false)
  useEffect(()=>{
    if(submitting){
      if(Object.keys(errors).length===0){
        submit(values);
      }
      setSubmitting(false);
    }
  },[errors])
  const handleKeyUp = (e) =>{
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   if(validations){
  //     setErrors(validations(values));
  //     setSubmitting(true);
  //     // errors = validations(values);
  //     if(Object.keys(errors).length===0){
  //       submit();
  //     }
  //   }else{
  //     submit();
  //   }
  // }
  const handleSubmit = (e) =>{
    e.preventDefault();
    setErrors(validations(values));
    setSubmitting(true);   
  }

  return {
    values,
    handleKeyUp,
    handleSubmit,
    errors
  }
}
 
export default useForm;