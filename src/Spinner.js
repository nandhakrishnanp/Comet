import React from 'react'

const Spinner = () => {
  return (
    <div >
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Spinner