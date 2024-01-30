import React from 'react'
import { FaUserCircle ,FaCog  , FaCar, FaRocket,FaFile,FaSignOutAlt, FaGlobe, FaSearchLocation, FaLocationArrow, FaSearch, FaCheck, FaCross, FaTimes, FaDotCircle} from 'react-icons/fa';
import { Link } from 'react-router-dom'
const Planroute = ({user ,ulocation , finallocation,  Setlocation}) => {
 

 const HandleFindLocation =()=>{
          Setlocation()
          
  }
  return (
    <div className='grey'>
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
  <Link  className='unstyle'  to="/"><a className="dropdown-item" href="#"><FaSignOutAlt/> LogOut</a></Link>
  <Link  className='unstyle' to="/evDetails"><a className="dropdown-item" href="# "><FaFile/> Feedback</a></Link>
</div>
</div>
                  </li>
               
                
               
            </ul>
   
        </div>
       
    </div>
</nav>

   
    <div className="container">

   
                  <div className="form   d-flex align-items-center justify-content-center full">

                    <div className="row">
                       <div className="col-md-7 ">
                       <h1 className='roboto-light text-center text-dark h2 pt-5'>Relax, Plan, Power On: Unwind as We Navigate, Charge, and <br/><span className='color'>Elevate Your Electric Journey!</span></h1>
                             <h2 className='roboto-normal pop color text-center'>Powered By Ai</h2>
                       </div>

                       <div className="col-md-5">
                        
                    <form className='animate3 ms-5 '>
                <p>
                    <label>My Location</label><br/>
                    < FaLocationArrow className='me-1'/>   <input   type="text" value={finallocation} name="first_name" required  /> 
                      <FaDotCircle className='ms-2 ' onClick={()=>HandleFindLocation()} />
                </p>
                <p>
                    <label>Destination</label><br/>
                    <FaCar className='me-1'/>   <input type="text" name="email" required /> 
                </p>
            
               
                <p>
                   <Link className='unstyle'><button id="sub_btn" type="submit " >Plan My Trip</button></Link> 
                </p>
            </form>
                       </div>
                    </div>
               
                  </div>
    </div>
</div>
  )
}

export default Planroute