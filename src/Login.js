import React from 'react'
import { Link } from 'react-router-dom'

import "./Login.css"

const Login = () => {

      
  return (
    <div className='bgimg3 full d-flex  align-items-center justify-content-center'>
         <div className="text-center m-5-auto ">
            <h2 className='text-white'>Sign in to us</h2>
            <form className='animate3' action="/Dashboard">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn"  type="submit">Login</button>
                </p>
            </form>
            <footer className='txt text-white unstyle'>
                <p >First time? <Link className='unstyle' to="/register">Create an account</Link></p>
                <Link className='unstyle' to="/"><p>Back to Homepage</p></Link>
            </footer>
        </div>
    </div>
  )
}

export default Login