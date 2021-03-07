import React from 'react'
import '../index.css'
import useForm from './useForm'
import validateInfo from './validateInfo'



const Signup = ({ submitForm }) => {
 const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validateInfo);

  return (
    <div className='form-content-right'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Get started today!</h1>
        <div className="form-inputs">
          <label htmlFor="form-label" className='form-lable'></label>
          Username
          <input 
            id='username'
            type="text" 
            className='form-input'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
        </div>
          <div className="form-inputs">
          <label htmlFor="form-lable" className='form-lable'>Email</label>
          <input 
            id='email'
            type="email" 
            className='form-input'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
            <div className="form-inputs">
              <label htmlFor="form-lable" className='form-lable'>Password</label>
              <input 
                id='password'
                type="password" 
                className='form-input'
                name='password'
                placeholder='Enter your passowrd'
                value={values.password}
                onChange={handleChange}
                />
                {errors.password && <p>{errors.password}</p>}
              </div>
              <div className="form-inputs">
               <label htmlFor="form-lable" className='form-lable'>Confirm Password</label>
               <input 
                id='passwordConfirm'
                type="password" 
                className='form-input'
                name='passwordConfirm'
                placeholder='Confirm you passowrd'
                value={values.passwordConfirm}
                onChange={handleChange}
                />
                {errors.passwordConfirm && <p>{errors.passwordConfirm}</p>}
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
