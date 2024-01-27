import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaUserCircle ,FaCog  , FaCar, FaRocket, FaGlobe, FaSearchLocation, FaLocationArrow, FaSearch} from 'react-icons/fa';




import Map from './Map';
import Spinner from './Spinner';


const Dashboard = ( {user , evChargingStations, isLoading, handleClick,setEndLocation, Endlocation,ulocation,
  distance,

  Setlocation
 }) => {

 

    console.log(user)

  
  return (

    <div >
      
        <nav className="navbar navbar-expand-md navbar-dark bg fixtop  ">
      <div className="container">
          <a  href="#" className="navbar-brand pdl color2 ">
              <FaRocket/>
              <h3 className="h3 d-inline pop"> Comet Charge <span className='text-warning'>. Ev</span></h3>
          </a>
       

          <Link to="/coins">
          <button type="button" className="btn btn-success ml100  round ms-5" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Eco Coins">
            <FaGlobe/>
           <span className="badge badge-light">400</span>
          </button></Link>
          <button className="navbar-toggler" type="button"data-bs-toggle="collapse" data-bs-target="#mynav">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynav">
              <ul className="navbar-nav ms-auto txt ">
                  <li className="nav-item  active hov">
                      <a href="#" className="nav-link">Map</a>
                  </li>
                  <li className="nav-item hov">
                      <a href="#about" className="nav-link">Ev Stations</a>
                  </li>
                  <li className="nav-item hov">
                      <a href="#service" className="nav-link">Plan My Route</a>
                  </li>
                
                    <li className="nav-item ms-3">
                         
                    <div className="dropdown">
  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {user.userName}
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link className='unstyle' to="/Account"><a className="dropdown-item " href="#"><FaUserCircle/> My Account</a></Link>
     <Link  className='unstyle'  to="/Setting"><a className="dropdown-item" href="#"><FaCog/> Settings</a></Link>
    <Link  className='unstyle' to="/evDetails"><a className="dropdown-item" href="#"><FaCar/> Vechicle Details</a></Link>
  </div>
</div>
                    </li>
                 
                  
                 
              </ul>
     
          </div>
         
      </div>
  </nav>
<div className="container ">
   {isLoading ? <Spinner/>: null}
  <div className="row">
  <div className="col-md-8">
       
   <Map  evChargingStations={evChargingStations} />
    
    
  </div>
  <div className="col-md-4">
          <form action="#" className='form-group pop'>

              <h2 className='txt color1'>Find And Reserve</h2>
           
              <button className='btn btn-dark' onClick={()=>{ Setlocation()}}>Get My location<FaLocationArrow className='ms-2'/></button>

           {  ulocation.length >0 ? <p className='mt-3'>{ulocation}</p>: null}
               <div className=" mt-3">
               <label for="locationDropdown " >Select a destination :</label>
    <select id="locationDropdown" value={Endlocation} className="form-control mt-3" onChange={(e)=>{setEndLocation(e.target.value)}}>
      <option value="alandurai">Alandurai</option>
      <option value="anaimalai">Anaimalai</option>
      <option value="annur">Annur</option>
      <option value="arasur">Arasur, Coimbatore</option>
      <option value="chettipalayam">Chettipalayam</option>
      <option value="chinnavedampatti">Chinnavedampatti</option>
      <option value="coimbatore">Coimbatore</option>
      <option value="dhaliyur">Dhaliyur</option>
      <option value="Ukkadam">Ukkadam</option>
      <option value="eachanari">Eachanari</option>
      <option value="ettimadai">Ettimadai</option>
      <option value="gudalur">Gudalur (Coimbatore district)</option>
      <option value="idikarai">Idikarai</option>
      <option value="irugur">Irugur</option>
      <option value="kangayampalayam">Kangayampalayam</option>
      <option value="kaniyur">Kaniyur, Coimbatore</option>
      <option value="kannampalayam">Kannampalayam</option>
      <option value="karamadai">Karamadai</option>
      <option value="karumathampatti">Karumathampatti</option>
      <option value="kinathukadavu">Kinathukadavu</option>
      <option value="kottur-malayandipattinam">Kottur-Malayandipattinam</option>
      <option value="kovaipudur">Kovaipudur</option>
      <option value="madukkarai">Madukkarai</option>
      <option value="malumichampatti">Malumichampatti</option>
      <option value="marudhamalai">Marudhamalai</option>
      <option value="mettupalayam">Mettupalayam, Coimbatore</option>
      <option value="mopperipalayam">Mopperipalayam</option>
      <option value="muthugoundenpudur">Muthugoundenpudur</option>
      <option value="narasimhanaickenpalayam">Narasimhanaickenpalayam</option>
      <option value="neelambur">Neelambur</option>
      <option value="odaiyakulam">Odaiyakulam</option>
      <option value="othakalmandapam">Othakalmandapam</option>
      <option value="pallapalayam">Pallapalayam, Coimbatore</option>
      <option value="pattanam">Pattanam, Coimbatore</option>
      <option value="periya_negamam">Periya Negamam</option>
      <option value="periyanaickenpalayam">Periyanaickenpalayam</option>
      <option value="pollachi">Pollachi</option>
      <option value="pooluvapatti">Pooluvapatti</option>
      <option value="samathur">Samathur</option>
      <option value="saravanampatti">Saravanampatti</option>
      <option value="sarcarsamakulam">Sarcarsamakulam</option>
      <option value="sirumugai">Sirumugai</option>
      <option value="somayampalayam">Somayampalayam</option>
      <option value="suleeswaranpatti">Suleeswaranpatti</option>
      <option value="sulur">Sulur</option>
      <option value="thekkupalayam">Thekkupalayam</option>
      <option value="thenkarai">Thenkarai, Coimbatore</option>
      <option value="thirumalayampalayam">Thirumalayampalayam</option>
      <option value="thondamuthur">Thondamuthur</option>
      <option value="uliyampalayam">Uliyampalayam</option>
      <option value="valparai">Valparai</option>
      <option value="vedapatti">Vedapatti</option>
      <option value="veerapandi">Veerapandi, Coimbatore</option>
      <option value="vellakinar">Vellakinar</option>
      <option value="vettaikaranpudur">Vettaikaranpudur</option>
      <option value="zamin_uthukuli">Zamin Uthukuli</option>
    </select>

  </div>
           <button className='btn btn-dark text-center mt-4 ms-5 ' onClick={(e)=>{handleClick(e)}}>Find Stations <FaSearch/></button>
             <br />
            
           <p className='mt-2 '>* As the App uses Opensource Api's the Accuracy of Users location may have slight Differences</p>
          </form>

          { distance>0 ? <p className='pop text-dark'>{Math.floor(distance)} KM </p>: null}
  </div>
  
  </div>
 
</div>
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