import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const MiniCard = ({
  heading1,
  course1,
  course2,
  heading2,
  lang1,
  lang2,
  animate,
}) => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    })
  }, [])

  return (
    <>
      <div
        className='miniCard__container shadow-lg'
        data-aos={animate}
        data-aos-offset='200'
        data-aos-once='false'
      >
        <div className='left__miniCard'>
          <h4 className='miniCard__h4'>{heading1}</h4>
          <h5 className='miniCard__h5'>{course1}</h5>
          <h5 className='miniCard__h5'>{course2}</h5>
        </div>
        <div className='right__miniCard'>
          <h4 className='miniCard__h4'>{heading2}</h4>
          <h5 className='miniCard__h5'>{lang1}</h5>
          <h5 className='miniCard__h5'>{lang2}</h5>
        </div>
      </div>
    </>
  )
}

export default MiniCard
