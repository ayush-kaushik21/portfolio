import { NavLink } from 'react-router-dom'
import MailIcon from '@material-ui/icons/Mail'
import { IconButton } from '@material-ui/core'
import { useState } from 'react'
import Sidebar from './Sidebar'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className={'topbar ' + (menuOpen && 'active')}>
        <div className='row'>
          <div className=' left col-md-6 col-10'>
            <div className='logo__container'>
              <div className='logo__header'>
                <NavLink to='/' className='logo__style'>
                  Ayush Kaushik
                </NavLink>
              </div>
              <div className='logo'>
                <h4>
                  <IconButton>
                    <MailIcon className='mailIcon' />
                  </IconButton>
                  kaushik.ayush9027@gmail.com
                </h4>
              </div>
            </div>
          </div>
          <div className=' right col-md-6 col-2'>
            <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
            </div>
            <div className='menu'>
              <NavLink to='/' className='menu__item'>
                About Me
              </NavLink>
              <NavLink to='/resume' className='menu__item'>
                Resume
              </NavLink>
              <NavLink to='/skills' className='menu__item'>
                Skills
              </NavLink>
              <NavLink to='/contact' className='menu__item'>
                Contact
              </NavLink>
            </div>
            <div className='sidebar__container'>
              {menuOpen && (
                <Sidebar setMenuOpen={setMenuOpen} className='sideBar__trans' />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
