import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"


export default function Register() {

    return (
        <div className="text-center m-5-auto  pt-5 bgimg3 full ">
            <div className="pop color2">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            </div>
          
            <form className='animate3' action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer className='txt text-white unstyle'>
               
                <Link className='unstyle' to="/"><p>Back to Homepage</p></Link>
            </footer>
        </div>
    )

}