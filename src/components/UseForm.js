import React, { useState } from 'react'

const UseForm = (validate) => {
    const [values, setValues] = useState({
      username: '',
      email: '',
      password: '',
      passwordConfirm: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = e => {
    const {name, value} = e.target
    setValues({
       ...values, [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setErrors(validate(errors))
  }
 

  return { handleChange, values, errors, handleSubmit }
}

export default UseForm
