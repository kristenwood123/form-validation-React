import { useState, useEffect } from 'react'
import validateInfo from './validateInfo'

const useForm = (callback, validateInfo) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const [errors, setErrors] = useState({values})
  const [submitting, setSubmitting] = useState(false)
  

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(
      {...values, [name]: value }
      )
  }


  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validateInfo(values))
    setSubmitting(true)
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 && submitting) {
      callback();
    }
  })

  return { handleChange, values, handleSubmit, errors }
}

export default useForm
