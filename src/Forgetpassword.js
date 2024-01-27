import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

const Forgetpassword = () => {
  return (
    <div className='bgimg3 full d-flex  align-items-center justify-content-center' > 
        
        <div className="text-center m-5-auto">
    <h2 className='color2'>Reset your password</h2>
    <h5 className='color2 pop'>Enter your email address and we will send you a new password</h5>
    <form action="/login">
        <p>
            <label id="reset_pass_lbl">Email address</label><br/>
            <input type="email" name="email" required />
        </p>
        <p>
            <button id="sub_btn" type="submit">Send password reset email</button>
        </p>
    </form>
    <footer className='txt text-white unstyle'>
                <p >First time? <Link className='unstyle' to="/register">Create an account</Link></p>
                <Link className='unstyle' to="/"><p>Back to Homepage</p></Link>
            </footer>
</div></div>
  )
}

export default Forgetpassword