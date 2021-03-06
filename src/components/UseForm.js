import { useState, useEffect } from 'react'

const useForm = () => {
  const [values, setValue] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const [errors, setErrors] = useState({})


  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value 
    })
  }
  return { handleChange }
}

export default useForm
