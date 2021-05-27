import React from 'react'
import ErrorLogo from '../images/error.svg'

const Error404 = () => {
  return (
    <>
      <div className='error__container'>
        <div className='container'>
          <div className='error__img__container'>
            <img src={ErrorLogo} alt='error' className='img-fluid' />
          </div>
          <h3 className='error__h3'>Page Not Found</h3>
        </div>
      </div>
    </>
  )
}

export default Error404
