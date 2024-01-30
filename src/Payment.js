import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Payment = ({
    popup,
    setPopup,
    station, 
    handleStationChange,
    date,
    setDate,
    timeSlot,
    setTimeSlot,
    setStationType,
    stationType,
    sendInputToApi
}) => {


    const [check , setCheck] =useState(false)

      const nav = useNavigate()


  return (
    <div>
         {  check ? 
   <div className='popup  d-flex align-items-center justify-content-center'>
         <img  className=' checked img-fluid imgs' src="./5aa78e207603fc558cffbf19.png" alt="" />  
               <div>
               <h4 className=' checked pop color2 pop '>ReserVation SuccessFull</h4>
               </div>
         
   </div>
             

  :null}
         <div className=' bgimg3 full d-flex  align-items-center justify-content-center'>
         <div className="text-center m-5-auto ">
            <h2 className='text-white'>Seamless Power, Effortless Payment: Charge Up Your EV with Confidence! </h2>
            <form className='animate3' onClick={(e)=>{
                e.preventDefault()
            }} >
            <h3 className='txt text-black pop'>Information</h3>
           <p>Available Slot : <span > CCS 2</span> </p>  
      <p>Station: <span >{station}</span> </p>
      <p>Date: {date}</p>
      <p>Time Slot: {timeSlot}</p>
    
                <p>
                    <button id="sub_btn"  type="submit" onClick={ ()=> {
                         setCheck(true)

                         setTimeout( ()=>{
                            setCheck(false)
                         },2000)

                         setTimeout( ()=>{
                            nav('/Dashboard')
                         },2000 )
                    }}>Confirm Reservation</button>
                </p>
            </form>
          
        </div>
    </div>
     
    </div>
  );
}

export default Payment;
