import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import "./Login.css"
import { Navigate } from 'react-router-dom'
const Login = () => {
const nav = useNavigate()
     const [admin , setAdmin] = useState('') 
  return (
    <div className=' bgimg3 full d-flex  align-items-center justify-content-center'>
         <div className="text-center m-5-auto ">
            <h2 className='text-white'>Sign in to us</h2>
            <form className='animate3'>
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required onChange={ (e)=> setAdmin(e.target.value)} />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn"  type="submit" onClick={ ()=>{
                        if(admin=='admin123'){
                            nav('/Admin')
                        }
                        else{
                            nav('/Dashboard')
                        }
                    }}>Login</button>
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