import React from 'react'
import axios from 'axios'
const Test = () => {
  return (
    <div>
        
     <button onClick={ async ()=>{
        const res = await axios.get('http://localhost:3004/predict')
        console.log(res);
     }}>   Click here
     </button>
    </div>
  )
}

export default Test