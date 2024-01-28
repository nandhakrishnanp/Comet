import React from 'react'
import { FaUserCircle ,FaCog  , FaCar, FaRocket,FaFile, FaGlobe, FaSearchLocation, FaLocationArrow, FaSearch, FaCheck, FaCross, FaTimes} from 'react-icons/fa';
import { Link } from 'react-router-dom'
const Planroute = ({user}) => {
  return (
    <div><nav className="navbar navbar-expand-md navbar-dark bg fixtop  ">
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
                    <Link className='unstyle' to="/Reserve"><a  className="nav-link ">Reserve</a></Link>
                </li>
                <li className="nav-item hov">
                <Link className='unstyle' to="/Planroute"><a  className="nav-link active">Plan My Trip</a></Link>
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
</nav></div>
  )
}

export default Planroute