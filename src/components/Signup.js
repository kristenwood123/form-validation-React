import React from 'react'
import '../index.css'
import useForm from './useForm'
import validateInfo from './validateInfo'



const Signup = () => {
 const { handleChange, values, handleSubmit, errors } = useForm(validateInfo);

  return (
    <div className='signup'>
      <form className='signup__form=' onSubmit={handleSubmit}>
        <h1>Get started today!</h1>
        <div className="signup__input">
          <label htmlFor="username" className='signup__label'></label>
          Username
          <input 
            id='username'
            type="text" 
            className='signup__input'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
        </div>
          <div className="signup__input">
          <label htmlFor="email" className='signup__label'>Email</label>
          <input 
            id='email'
            type="email" 
            className='signup__input'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
            />
            <div className="signup__input">
              <label htmlFor="password" className='signup__label'>Password</label>
              <input 
                id='password'
                type="password" 
                className='signup__input'
                name='password'
                placeholder='Enter your passowrd'
                value={values.password}
                onChange={handleChange}
                />
              </div>
              <div className="signup__input">
               <label htmlFor="passwordConfirm" className='signup__label'>Confirm Password</label>
               <input 
                id='passwordConfirm'
                type="password" 
                className='signup__input'
                name='passwordConfirm'
                placeholder='Confirm you passowrd'
                value={values.passwordConfirm}
                onChange={handleChange}
                />
          </div>
          <button 
            className='signup__btn' 
            type='submit' >Sign Up</button>
          <span className='signup__input-login'>Already have an account? Login <a href="#">Here</a></span>
        </div>
      </form>
    </div>
  )
}

export default Signup
