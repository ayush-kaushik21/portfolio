import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ setMenuOpen }) => {
  return (
    <>
      <div className='sidebar'>
        <NavLink
          to='/'
          onClick={() => setMenuOpen(false)}
          className='sidebar__item'
        >
          About Me
        </NavLink>
        <NavLink
          to='/resume'
          onClick={() => setMenuOpen(false)}
          className='sidebar__item'
        >
          Resume
        </NavLink>
        <NavLink
          to='/skills'
          onClick={() => setMenuOpen(false)}
          className='sidebar__item'
        >
          Skills
        </NavLink>
        <NavLink
          to='/contact'
          onClick={() => setMenuOpen(false)}
          className='sidebar__item'
        >
          Contact
        </NavLink>
      </div>
    </>
  )
}

export default Sidebar
