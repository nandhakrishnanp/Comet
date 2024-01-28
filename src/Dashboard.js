import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaUserCircle ,FaCog,FaBolt , FaCar, FaRocket, FaGlobe, FaSearchLocation, FaLocationArrow, FaSearch, FaFile, FaMap} from 'react-icons/fa';








const Dashboard = ( {user , evChargingStations, isLoading, handleClick,setEndLocation, Endlocation,ulocation,
  distance,

  Setlocation
 }) => {

 

    console.log(user)

  
  return (

    <div className='grey' >
      
        <nav className="navbar navbar-expand-md navbar-dark bg fixtop  ">
      <div className="container">
          <a  href="#" className="navbar-brand pdl color2 ">
              <FaRocket/>
              <h3 className="h3 d-inline pop"> Comet Charge <span className='text-warning'>. Ev</span></h3>
          </a>
       

          <Link to="/coins">
          <button type="button" className="btn btn-light ml100 gbg text-black round ms-5" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Eco Coins">
            <FaGlobe/>
           <span className="badge badge-dark text-dark ">400</span>
          </button></Link>
          <button className="navbar-toggler" type="button"data-bs-toggle="collapse" data-bs-target="#mynav">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynav">
              <ul className="navbar-nav ms-auto txt ">
                  <li className="nav-item  active hov">
                  <Link className='unstyle' to="/Dashboard"> <a  className="nav-link active">Home</a></Link>
                  </li>
                  <li className="nav-item hov">
                      <Link className='unstyle' to="/Reserve"><a href="#about" className="nav-link">Reserve</a></Link>
                  </li>
                  <li className="nav-item hov">
                  <Link className='unstyle' to="/Planroute"><a  className="nav-link">Plan My Trip</a></Link>
                  </li>
                
                    <li className="nav-item ms-3">
                         
                    <div className="dropdown">
  <button className="btn btn-light gbg text-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {user.userName}
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link className='unstyle' to="/Account"><a className="dropdown-item " href="#"><FaUserCircle/> My Account</a></Link>
     <Link  className='unstyle'  to="/Setting"><a className="dropdown-item" href="#"><FaCog/> Settings</a></Link>
    <Link  className='unstyle' to="/evDetails"><a className="dropdown-item" href="# "><FaFile/> Feedback</a></Link>
  </div>
</div>
                    </li>
                 
                  
                 
              </ul>
     
          </div>
         
      </div>
  </nav>
  <section className='  grey'>
  <div className="container pb-4 ">
  <h1 className='roboto-light text-center text-dark h4 pt-2'>Charge Ahead, Cut Emissions: Each EV Plug-in, a Promise to a Cleaner Horizon. </h1>
         <div className="row">
             
          <div className="col-md-7 mt-3 ">
                 <img className='img-fluid    shade text-center  round' width="900px"  src="https://s7ap1.scene7.com/is/image/tatapassenger/oxide-left?$VH-708-500-D$&fit=crop&fmt=png-alpha" alt="" />
                 <h2 className='text-center '>Tata Nexon Ev</h2>
          </div>
          <div className="col-md-5 mt-3  ">
                
                  <div className="car-details p-3 txt text-white bg round  shade">
                    

    <p><span class="attribute">AC Charging Time (10-100%):</span><span class="value"> 6 hours at 7.2 kW</span></p>
    <p><span class="attribute">Charging Port:</span><span class="value"> CCS-II</span></p>
    <p><span class="attribute">DC Charging Time (10-80%):</span><span class="value"> 56 minutes at 50 kW</span></p>
    <p><span class="attribute">Battery Capacity:</span><span class="value"> 40.5 kWh</span></p>
    <p><span class="attribute">Range:</span><span class="value"> 465 km</span></p>
    <p><span class="attribute">Last Charged : </span><span class="value">23 hours ago</span></p>
  </div > 
  <div className='bg  round  pop text-white p-4 mt-3 pb-5 text-center  shade'>
       
          <h5 className='txt h6'>Seamless Power Awaits: Secure Your EV Charge, Anytime, Anywhere</h5>
      <Link to="/Reserve"><button className='btn btn-light mt-1 gbg'> <FaBolt className='pe-1'/>Reserve my Charger</button></Link> 
  </div>
  
       
          </div>
         </div>
  

    
    </div>
  </section>

  <section className=' bg '>
        <h1 className='roboto-light text-center text-white h2 pt-5'>Relax, Plan, Power On: Unwind as We Navigate, Charge, and <br/><span className='color2'>Elevate Your Electric Journey!</span></h1>

        <div className="container">
      

          <div className="row">
                <div className="col-md-6 pt-5">
               <h3 className='pop color2'> 1. Enter Your Journey Details:</h3> <br/>

<p className='pop text-white'>Begin by inputting your starting point, destination, and any waypoints you'd like to explore along the way. The trip planner will curate the best route for your EV adventure.</p>
                </div>

                <div className="col-md-6">
                  <img  width="300px" src="./map-flatline.png" alt="" />
                </div>
          </div>
          <div className="row ">
                 <div className="col-md-6">
                 <img  width="400px" src="./eco-car-outline.png" alt="" />
                 </div>
                <div className="col-md-6 pt-5">
               <h3 className='pop color2'> 2. Discover Charging Stations En Route:</h3> <br/>

<p className='pop text-white'>Our intelligent trip planner scans the route and identifies optimal EV charging stations strategically placed between your location and destination. Get real-time information on charging station availability, charging speeds, and amenities.</p>
                </div>
          </div>
          <div className="row">
                <div className="col-md-6 pt-5">
               <h3 className='pop color2'> 3. Plan Your Stops, Charge with Ease:</h3> <br/>

<p className='pop text-white'>Customize your journey by selecting preferred charging stations based on your charging needs and preferences. The trip planner ensures seamless integration, allowing you to plan breaks, explore attractions, and charge your EV hassle-free. Your electrifying road trip awaits!</p>
                </div>

                <div className="col-md-6">
                <img className='ms-3'  width="300px" src="./traveling-flatline.png" alt="" />
                </div>
          </div>
        </div>

        <div className="text-center p-5">
        <Link to="/Planroute"><button className='btn btn-light btn-lg mt-1 gbg '> <FaBolt className='pe-1'/>Plan My Route</button></Link> 
        </div>
       
  </section>

<footer className=' bg p-5 mt-5 '>

<div className="container text-center  text-white txt ">
      <p>&copy; Team Power Pixels </p>
      <br />
      <p>Contact : nandhakrishnandev@gmail.com </p>
</div>
</footer>
    </div>
  )
}

export default Dashboard