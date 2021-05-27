import React from 'react'
import SkillImg from '../images/skills.svg'
import mySkills from '../DataUser/SkillData'
import { Line } from 'rc-progress'

const Skills = () => {
  return (
    <>
      <div className='skills__container'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-10 mx-auto skill__container__left'>
              <div className='skill__container__left__img'>
                <img
                  src={SkillImg}
                  alt='img'
                  className='img-fluid animateImg'
                />
              </div>
            </div>
            <div className='col-md-7 col-10 mx-auto skill__container__right shadow-lg'>
              <div className='skill__container__right__heading'>
                <h4 className='skill__h4'>My Skills</h4>
                {/* <div className='skill__border'></div> */}
              </div>
              {mySkills.map((item) => (
                <div className='skill__container__right__skill'>
                  <h6 className='skill__h6'>{item.skillName}</h6>
                  <Line
                    percent={item.percent}
                    strokeWidth='3'
                    strokeColor={item.color}
                    trailColor='#D9D9D9'
                    trailWidth='3'
                  />
                  <h5 className='skill__h5'>{item.percent}%</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
