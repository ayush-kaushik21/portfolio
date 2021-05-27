import Button from './Button'
import Cards from './Cards'
import MiniCard from './MiniCard'
import SchoolIcon from '@material-ui/icons/School'

import { IconButton } from '@material-ui/core'
import Card__data__access from '../DataUser/CardData'
import miniData__access from '../DataUser/MiniCardData'
import ScrollBn from './ScrollBn'
import { NavLink } from 'react-router-dom'
import Pdf from '../resume/Ayush Kaushik Resume.pdf'

const Resume = () => {
  return (
    <>
      <div className='resumeBody'>
        <div className='container'>
          <div className='resume'>
            <h4 className='resume__h4'>
              <IconButton>
                <SchoolIcon className='schoolicon' />
              </IconButton>
              Resume
            </h4>
          </div>
          <div className='resume__upperPart'>
            <h5 className='resume__h5'>Education</h5>
            <a href={Pdf} className='resume__btn'>
              Download CV
            </a>
          </div>
          <div className='resume__cards'>
            {Card__data__access.map((item, id) => (
              <Cards
                key={id}
                info={item.info}
                id={item.id}
                degree={item.degree}
                institute={item.institute}
                year={item.year}
                animate={item.animate}
              />
            ))}
            <h5 className='resume__h5'>Professional skillset</h5>
            {miniData__access.map((item, id) => (
              <MiniCard
                key={id}
                heading1={item.heading1}
                course1={item.course1}
                course2={item.course2}
                heading2={item.heading2}
                lang1={item.lang1}
                lang2={item.lang2}
                animate={item.animate}
              />
            ))}
          </div>
        </div>
        <ScrollBn showBelow={250} />
      </div>
    </>
  )
}

export default Resume
