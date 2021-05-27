import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({ text }) => {
  return (
    <>
      <NavLink
        to={'/' + text}
        className={
          'myBtn text-capitalize ' +
          (text === 'resume' ? 'resumeClass' : 'skillsClass')
        }
      >
        {text}
      </NavLink>
    </>
  )
}

export default Button
