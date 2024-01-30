import React from 'react'
import Chart from 'react-apexcharts';
import { FaUserCircle ,FaCog,FaBolt , FaCar, FaRocket, FaGlobe, FaSearchLocation, FaLocationArrow, FaSearch, FaFile, FaMap, FaSignOutAlt} from 'react-icons/fa';
import Spinner from './Spinner';
import ReactApexChart from 'react-apexcharts';
import { useState } from 'react';
 import { useEffect } from 'react';
 import { Link } from 'react-router-dom';
const Admin = ({handleAi}) => {
      const [isLoading , setIsloading] =useState(false) 
    const [dataai,setdataai]=useState('') 
    const [Max ,Setmax] =useState('')
    const [min , Setmin]= useState('')
    const handleData = async () => {
        try {
          const data = await handleAi();
          console.log(data);
      
          // Update state with the fetched data
          setdataai(data);
      
          // Find the max value among the object values
          const maxvalue = Math.max(...Object.values(data));
      
          // Update another state variable with the max value
          Setmax(Max);
      
          console.log('Max Value:', maxvalue);
        } catch (error) {
          console.error('Error handling data:', error);
        }
      };
      

    const chartData = {
        series: [{
          name: 'Demand',
          data: [
            { x: '00:00', y: 20 },
            { x: '01:00', y: 20 },
            { x: '02:00', y: 18 },
            { x: '03:00', y: 20 },
            { x: '04:00', y: 25 },
            { x: '05:00', y: 23 },
            { x: '06:00', y: 35 },
            { x: '07:00', y: 29 },
            { x: '08:00', y: 47 },
            { x: '09:00', y: 45 },
            { x: '10:00', y: 25 },
            { x: '12:00', y: 20 },
            { x: '13:00', y: 12 },
            { x: '14:00', y: 23 },
            { x: '15:00', y: 35 },
            { x: '16:00', y: 27 },
            { x: '17:00', y: 45 },
            { x: '18:00', y: 60 },
            { x: '19:00', y: 53 },
            { x: '20:00', y: 35 },
            { x: '21:00', y: 27 },
            { x: '22:00', y: 14 },
            { x: '23:00', y: 12 },
            { x: '24:00', y: 18 },
          
            // Add more data points as needed
          ]
        }],
        options: {
          chart: {
            type: 'line',
            zoom: {
              enabled: true,
            },
          },
          xaxis: {
            type: 'category',
            categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
            labels: {
              rotate: -45,
              formatter: function (val) {
                return val + ":00";
              }
            }
          },
          yaxis: {
            title: {
              text: 'Demand (kWh)',
            },

          },
        },
      };

     

const dynamicChartData = Object.values(dataai).map((value, index) => ({
  x: index < 10 ? `0${index}:00` : `${index}:00`,
  y: value < 0 ? 0 : value > 60 ? 60 : value.toFixed(2), // Ensure values are between 0 and 60
}));



      const chartAiData = {
        series: [{
          name: 'Demand',
         
        }],
        options: {
          chart: {
            type: 'line',
            zoom: {
              enabled: true,
            },
          },
          xaxis: {
            type: 'category',
            categories: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
            labels: {
              rotate: -45,
              formatter: function (val) {
                return val + ":00";
              }
            }
          },
          yaxis: {
            title: {
              text: 'Demand (kWh)',
            },

          },
        },
      };
      chartAiData.series[0].data = dynamicChartData;


      const chartData1 = {
        series: [45, 35, 20], // Example data, you can adjust these values
        options: {
          chart: {
            type: 'pie',
          },
          labels: ['CCS-2', 'Standard Ac', 'CHAdeMO' ], // Example labels, you can adjust these values
        },
      };
      
      const chartData3 = {
        series: [60,4], // Example data, you can adjust these values
        options: {
          chart: {
            type: 'pie',
          },
          labels: ['Max kwh' , 'Min Kwh'], // Example labels, you can adjust these values
        },
      };
    

        useEffect( ()=>{
              setIsloading(true)
              setTimeout(()=>{
                        
            handleData()
            setIsloading(false)
              },3000)
        },[])
  return (
    <div>
        
        
        <nav className="navbar navbar-expand-md navbar-dark bg fixtop  ">
      <div className="container">
          <a  href="#" className="navbar-brand pdl color2 ">
              <FaRocket/>
              <h3 className="h3 d-inline pop"> Comet Charge <span className='text-warning'>. Ev</span></h3>
          </a>
       

       
         
          <button className="navbar-toggler" type="button"data-bs-toggle="collapse" data-bs-target="#mynav">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynav">
             
  <button className="btn ms-auto btn-light gbg text-dark dropdown-toggle" type="button" >
      Admin
  </button>
      
             </div>     
            </div>      
    </nav>

    <h2 className='pop text-center mt-3'>Real-Time Analysis </h2>

     <div className="row">
        <div className="col-md-7 ">
           <h3 className='txt text-black ms-3 '>Station 1 : Kwh vs hours</h3>
        <Chart   options={chartData.options} series={chartData.series} className="ms-3 mt-5"  type="line" height={300} />
         <p className='text-center pop '>Hours</p>
        </div>

        <div className="col-md-5">
        <h4 className='txt text-black ms-3 '>Station 1 : Usage of Charge Standards</h4>
         <Chart options={chartData1.options} series={chartData1.series} type="pie" width="380" />
        </div>
     </div>

     
     <div className="row">
            
     <h2 className='pop text-center mt-3'>Predictive Analysis </h2>
       <p className='txt text-dark text-center'>Next 24 Hours Data From Machine Learning Algorithm</p>
              <div className="col-md-7">
                { isLoading ? 
                     <div>
                        <Spinner className="ms-5"/>
                        <h5 className='text-center pop'>Predicting... Please Wait</h5>
                     </div> :null}
              <Chart   options={chartAiData.options} series={chartAiData.series} className="ms-3 mt-5"  type="line" height={300} />
              </div>
     
       
           
          <div className="col-md-5">
                  <div >
                        <h2 className='txt text-center text-dark'>Prediction</h2>

                        <Chart options={chartData3.options} series={chartData3.series} type="pie" width="380" /> 

                  </div>
          </div>
     </div>
     <button  className='btn btn-dark text-center ms-auto' >   <Link className='unstyled'  to="/"><a  href="#"><FaSignOutAlt/> LogOut</a></Link>       </button>
    </div>
  )
}

export default Admin