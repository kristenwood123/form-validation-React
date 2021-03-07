import { useState } from 'react'
import validateInfo from './validateInfo'

const useForm = (validateInfo) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const [errors, setErrors] = useState({values})


  const handleChange = e => {
    const { name, value } = e.target;
    setValues(
      {...values, [name]: value }
      )
  }

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validateInfo(values))
  }

  return { handleChange, values, handleSubmit, errors }
}

export default useForm
