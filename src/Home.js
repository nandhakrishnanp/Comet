import React from 'react'
import { Link } from 'react-router-dom'
import { FaRocket} from 'react-icons/fa';
const Home = () => {
  return (
    <div className='bg'>
        {/* navbar */}
          <nav class="navbar navbar-expand-md navbar-dark bg fixtop  ">
      <div class="container">
        
          <a  href="#" class="navbar-brand pdl color2 ">
              <FaRocket/> 
              <h3 className="h3 d-inline pop"> Comet Charge . Ev</h3>
          </a>
          <button class="navbar-toggler" type="button"data-bs-toggle="collapse" data-bs-target="#mynav">
              <span class="navbar-toggler-icon"></span>
          </button>

          
         
          <div class="collapse navbar-collapse" id="mynav">
              <ul class="navbar-nav ms-auto txt ">
                  <li class="nav-item  active hov">
                      <a href="#" class="nav-link">Home</a>
                  </li>
                  <li class="nav-item hov">
                      <a href="#about" class="nav-link">About</a>
                  </li>
                  <li class="nav-item hov">
                      <a href="#service" class="nav-link">Our Services </a>
                  </li>
                
                    <li className="nav-item ms-3">
                        <Link to='/login'> <button className="btn btn-success mb-1 mt-1">Login/Register</button></Link>
                    </li>
                 
                  
                 
              </ul>

          </div>
      </div>
  </nav>
         {/* landing banner */}
  <section  className='bg d-flex align-items-center mt bgimg4 h400 '>
  <div className="container  mt-5 p-2 wid">
    <div className='animate'>
    <h1 className='h2 pop text-white size'>Wellcome to <span className='color2'>CometCharge</span> </h1> 
        <h2 className='h4 pop text-white  size '>Leading the way in EV charging station reliability</h2>
       <Link to='/login'><button className='btn btn-outline-light mt-1 ml-1 '> Find Station</button></Link> 
    </div>
    
  </div>
  </section>
             {/* about page */}
   <section id='about' className='bg mt p-2 mt-2'>
        <div className="container">
            <h2 className='text-center color2 pop'>About Comet Charge</h2>
            <p >
        At Comet Charge, we are driven by a passion for transforming the future of transportation. As a leading provider
        of electric vehicle (EV) charging solutions, we strive to redefine the way people power their journeys, fostering
        a cleaner and more sustainable world.
    </p>

    <h2 className='color2'>Our Commitment:</h2>
    <ul>
        <li>Sustainability: Comet Charge is committed to promoting eco-friendly mobility. By offering cutting-edge EV
            charging infrastructure, we empower individuals and businesses to make environmentally conscious choices.</li>

        <li>Innovation: We are at the forefront of technological advancements in the EV charging industry. Our
            state-of-the-art charging stations are designed for speed, efficiency, and seamless user experiences.</li>

        <li>Accessibility: Comet Charge aims to make EV charging accessible to everyone. Whether you are on a road trip,
            commuting to work, or simply exploring your city, our widespread network of charging stations ensures you are
            always powered up.</li>

        <li>Community: Beyond charging solutions, Comet Charge is building a community of like-minded individuals who
            share a vision for a sustainable future. Join us in creating a network that drives positive change.</li>
    </ul>

    <h2 className='color2'>Why Choose Comet Charge?</h2>
    <ul>
        <li>Fast Charging: Our charging stations are equipped with cutting-edge technology, delivering fast and reliable
            charging to get you back on the road in no time.</li>

        <li>Green Energy: Comet Charge is committed to using renewable energy sources to power our charging stations,
            reducing your carbon footprint.</li>

        <li>User-Friendly App: Easily locate, navigate, and pay for charging sessions through our user-friendly mobile
            app, making the Comet Charge experience convenient and hassle-free.</li>
    </ul>

    <p>Join us in the electric revolution. Power up with Comet Charge and be part of a cleaner, greener tomorrow.</p>
        </div>
   </section >
 
             {/* service */}
   <section id='service' className='bg-white mt p-4'>
  <div className="container animate2 ">
    <h2 className='text-center color pop'>Our Innovations</h2>
    <div className="row">

      <div className="col-md-3 mb-3 d-flex">
        <div className="card flex-fill ">
          <img className='card-img-top img-fluid mx-auto d-block' src="/undraw_cabin_hkfr.png" alt="img1" style={{ maxWidth: '65%', height: 'auto' }} />
          <div className="card-body text-center">
            <h4 className="card-title mt-5">
              Renewable Energy Usage
            </h4>
          </div>
        </div>
      </div>

      <div className="col-md-3 mb-3 d-flex">
        <div className="card flex-fill">
          <img className='card-img-top img-fluid mx-auto d-block ' src="/undraw_Order_confirmed_re_g0if.png" alt="img1" style={{ maxWidth: '80%', height: 'auto' }} />
          <div className="card-body text-center">
            <h4 className="card-title mt-5">
              Advanced Reservation System
            </h4>
          </div>
        </div>
      </div>

      <div className="col-md-3 mb-3 d-flex">
        <div className="card flex-fill">
          <img className='card-img-top img-fluid mx-auto d-block' src="/undraw_discount_d4bd.png" alt="img1" style={{ maxWidth: '80%', height: 'auto' }} />
          <div className="card-body text-center">
            <h4 className="card-title mt-5 pt-4">
              Dynamic Price Allocation
            </h4>
          </div>
        </div>
      </div>

      <div className="col-md-3 mb-3 d-flex">
        <div className="card flex-fill">
          <img className='card-img-top img-fluid mx-auto d-block' src="/undraw_My_location_re_r52x.png" alt="img1" style={{ maxWidth: '80%', height: 'auto' }} />
          <div className="card-body text-center">
            <h4 className="card-title mt-4">
              Best Station Suggestion
            </h4>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
            {/* footer */}
    <footer className='mt p-4 bg '>

        <div className="container text-center  text-white txt">
              <p>&copy; Team Power Pixels </p>
              <br />
              <p>Contact : nandhakrishnandev@gmail.com </p>
        </div>
    </footer>
    </div>
  )
}

export default Home