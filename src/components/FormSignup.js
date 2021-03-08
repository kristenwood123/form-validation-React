import React from 'react'
import UseForm from './UseForm'
import validate from './Validation'

const FormSignup = () => {
  const { handleChange, values, handleSubmit, errors } = UseForm(validate)
  
  return (
    <div className='form-container'>
      <h1>Get Started Today!</h1>
      <form className='form' type='submit' onSubmit={handleSubmit}>
        <div className="form__inputs">
          <label htmlFor="username">Username</label>
            <input 
              id='username' 
              type="text"
              className='form__input'
              name='username'
              placeholder='Enter your username'
              value={values.username}
              onChange={handleChange}
            />
        </div>
        <div className="form__inputs">
          <label htmlFor="email">Email</label>
            <input 
              id='email' 
              type="text"
              className='form__input'
              name='email'
              placeholder='Enter your email'
              value={values.email}
              onChange={handleChange}
            />
        </div>
        <div className="form__inputs">
          <label htmlFor="password">Password</label>
            <input 
              id='password' 
              type="text"
              className='form__input'
              name='password'
              placeholder='Enter your password'
              value={values.password}
              onChange={handleChange}
            />
        </div>
        <div className="form__inputs">
          <label htmlFor="username">Confirm Password</label>
            <input 
              id='passwordConfirm' 
              type="text"
              className='form__input'
              name='passwordConfirm'
              placeholder='Enter your password'
              value={values.passwordConfirm}
              onChange={handleChange}
            />
        </div> 
        <button>Submit</button>   
      </form> 
    </div>
  )
}

export default FormSignup
