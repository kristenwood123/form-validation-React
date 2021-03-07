import React, { useState } from 'react'
import FormSuccess from './FormSuccess'
import Signup from './Signup'


const Form = () => {
  const [submitted, setSubmitted] = useState(false)

  function submitForm() {
    setSubmitted(true)
  }

  return (
    <div className='form-container'>
      <span className="close-btn">x</span>
        <img className='form-img' src="../img/img-2.svg" alt=""/>
      {!submitted ? (
        <Signup submitForm={submitForm} />
        ) : (
          <FormSuccess />)}
    </div>
  )
}

export default Form
