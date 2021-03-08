function validateInfo (values) {
  let errors = {}
  
  if (!values.username.trim()) {
    errors.username = 'Username is required'
  }

  if(!values.email) {
    errors.email = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid'
  }

  if(!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length < 6) {
    errors.password = 'Password must be more than 6 characters'
  }

  if(!values.passwordConfirm) {
    errors.password = 'Password is required'
  } else if (values.passwordConfirm !== values.password) {
    errors.passwordConfirm = 'Passwords do not match'
  }
  return errors
}

export default validateInfo

