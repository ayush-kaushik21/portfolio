import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MailIcon from '@material-ui/icons/Mail'
import Socialicons from './Socialicons'
import { IconButton } from '@material-ui/core'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='left'>
          <p>
            &copy; {new Date().getFullYear()} , All Rights are reserved, made
            with
            <IconButton>
              <FavoriteIcon className='heartIcon' />
            </IconButton>
            by
            <span> Ayush Kaushik</span>
          </p>
        </div>
        <div className='right'>
          <div className='right__write'>
            <h6>Write</h6>
            <p>
              <MailIcon /> kaushik.ayush9027@gmail.com
            </p>
          </div>
          <div className='right__follow'>
            <h6>Follow</h6>
            <Socialicons />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
