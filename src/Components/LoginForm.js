import React from 'react'

const LoginForm = (props) => {
  return(
    <form>
      <div>
        <label>Email</label>
        <input id='email'></input>
      </div>

      <div>
        <label>Password</label>
        <input id='password'></input>
      </div>
      <button onClick={(e) => props.loginHandler(e)} id="submit">Submit</button>
    </form>
    
  )
}

export default LoginForm