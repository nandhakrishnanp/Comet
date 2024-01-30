import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'; 

import { MapContainer, TileLayer } from 'react-leaflet';

import Map from './Map';
import { FaUserCircle ,FaCog  , FaCar, FaRocket,FaFile, FaGlobe, FaSearchLocation, FaLocationArrow,FaSignOutAlt, FaSearch, FaCheck, FaCross, FaTimes} from 'react-icons/fa';
const Reserve = ({evChargingStations,user, handleClick,mylocation,
    distance, L, ulocation,
    Setlocation,popup,
    setPopup,
    station, 
    handleStationChange,
    date,
    setDate,
    timeSlot,
    setTimeSlot,
    setStationType,
    stationType,
    sendInputToApi}) => {
    

      // const Handlereserve=()=>{
      //     setcheck(true)

      //     setPopup(false)

      //     setTimeout(() => {
      //       setcheck(false)
      //     }, 3000);
      // }
  return (
    <div className='over'>
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
              <li className="nav-item   hov">
                  <Link className='unstyle' to="/Dashboard"> <a  className="nav-link ">Home</a></Link>
                  </li>
                  <li className="nav-item hov ">
                      <Link className='unstyle' to="/Reserve"><a  className="nav-link active">Reserve</a></Link>
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
    <Link  className='unstyle'  to="/"><a className="dropdown-item" href="#"><FaSignOutAlt/> LogOut</a></Link>
    <Link  className='unstyle' to="/evDetails"><a className="dropdown-item" href="# "><FaFile/> Feedback</a></Link>
  </div>
</div>
                    </li>
                 
                  
                 
              </ul>
     
          </div>
         
      </div>
  </nav>
<div className="row ">
   
  
  { popup ? <div className="popup  d-flex align-items-center justify-content-center">
              <div className='closebut' onClick={()=>setPopup(false)}> <FaTimes  /></div>
              <div className="warp">
                          <div className="form pop">
                          <form className='form-group bg-light animateup' >

                            <h2 className='txt text-center  text-dark '>Check Availability & Reserve</h2>
                            <label className="form-label">    
        EV Station:
        <select value={station} onChange={handleStationChange}>
          {evChargingStations.map((element) => (
            <option key={element.name} value={element.name}>
              {element.name}  
            </option>  
          ))}
        </select>
      </label>
<br />

    
      <label class="form-label mt-3">
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <br />
      <br />
      <br />

      <label class="form-label mt-3 me-4">
        Time Slot:
        <input
        class="form-control" 
          type="time"
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
          required
        />
     
      </label>
      <br />
      <br />

      <label class="form-label">
        Station Type:
        <select
        className='dropdown ms-2'
        
          onChange={(e) => setStationType(e.target.value)}
          required
        >
         
          <option value="fast">Fast Charging</option>
          <option value="standard">Standard Charging</option>
        </select>
      </label>
      <br />
   <br />
      <button className='btn ms-5 btn-dark text-center d-block mt-4 ms-5 '  onClick={()=>{
                             sendInputToApi()
                            }}> Check Availability <FaSearch/></button>
     
    </form>
                    </div>
              </div>
                   
          </div> : null}

      <div className="col-md-3  ">
          <form action="#" className=' ms-3 form-group pop bg-white'>

              <h3 className='txt color1'> Find Best Station</h3>

                        
              <button className='btn btn-dark text-center mt-4 ms-5 ' onClick={()=>Setlocation() }>Quick Find <FaSearch/></button>
     <div className=" mt-3">
              

  </div>
          
           
            
          
          </form>


          <form action="#" className=' ms-3 form-group pop bg-white'>
               <p>Tap to Reserve Your Charge! Your electric journey begins with a simple click</p>
               <button className='btn btn-dark text-center mt-4 ms-5 ' onClick={()=> setPopup(true)}>Reserve My Station <FaCheck className='ms-1'/></button>

          </form>
          
         
           
  </div>
  
  <div className="col-md-9">
       
  
  <MapContainer center={[10.9956, 77.2852]} zoom={10} scrollWheelZoom={true}  style={{ position: 'relative', width: '100%', height: '100vh', zIndex: 0    }}>
        <Map   mylocation={mylocation}
            evChargingStations={evChargingStations}
            uLocation={ulocation}
            L={L} />
    
    </MapContainer>     
    
  </div>

  </div>
  
    </div>
  )
}

export default Reserve