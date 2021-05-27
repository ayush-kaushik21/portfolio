import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Cards = ({ info, institute, degree, year, animate }) => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    })
  }, [])

  return (
    <>
      <div
        className='card__container shadow-lg'
        data-aos={animate}
        data-aos-offset='200'
        data-aos-once='false'
      >
        <div className='left'>
          <h4 className='left__h4'>{year}</h4>
          <h5 className='left__h5'>{degree}</h5>
          <h6 className='left__h6'>{institute}</h6>
        </div>
        <div className='right'>
          <p>{info}</p>
        </div>
      </div>
    </>
  )
}

export default Cards
