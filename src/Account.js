import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Account = ({user}) => {

      
  return (
    
  <div className='bgimg3 '>
        <h1 className='roboto-light text-center  color2 h4 pt-2'>Account Details </h1>
      
        <h1 className=' ms-3 text-center roboto-regular text-white'>Welcome, {user.userName}</h1>
      <div className='text-dark text-center d-flex justify-content-center '>
     
        <div className=' grey rounded p-5'>
        <h2 >Your EV Details:</h2>
      <p><strong>Name:</strong> {user.evDetails.Name}</p>
      <p><strong>Battery Type:</strong> {user.evDetails.batterytype}</p>
      <p><strong>Battery Capacity:</strong> {user.evDetails.batteryCapacity}</p>
      <p><strong>Charging Time:</strong> {user.evDetails.chargingTime}</p>
      <p><strong>Range:</strong> {user.evDetails.range} miles</p>

      <h2>Your EcoCoins Balance:</h2>
      <p>{user.ecocoins} EcoCoins</p>
      <Link className='unstyle text-center' to="/Dashboard"><button className='btn btn-dark'>Back to Homepage</button></Link>r
        </div>
       
    </div>

   

<br />
<br />
<br />
<br />
<br />
  </div>
  )
}

export default Account