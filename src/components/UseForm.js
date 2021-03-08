import React, { useState } from 'react'

const UseForm = () => {
    const [values, setValues] = useState({
      username: '',
      email: '',
      password: '',
      passwordConfirm: ''
  })

  const [errors, setErrors] = useState({values})

  const handleChange = e => {
    const {name, value} = e.target
    setValues({
       ...values, [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

  }
 


  return { handleChange, values, errors, handleSubmit }
}

export default UseForm
