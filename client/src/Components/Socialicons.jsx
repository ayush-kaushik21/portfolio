import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import GitHubIcon from '@material-ui/icons/GitHub'
import MailIcon from '@material-ui/icons/Mail'
import { IconButton } from '@material-ui/core'

const Socialicons = () => {
  return (
    <div className='social__icons'>
      <IconButton>
        <a href='https://www.linkedin.com/in/ayush-kaushik-027450188'>
          <LinkedInIcon className='linkedin' />
        </a>
      </IconButton>
      <IconButton>
        <a href='https://github.com/ayush-kaushik21'>
          <GitHubIcon className='github' />
        </a>
      </IconButton>
      <IconButton>
        <MailIcon className='mail' />
      </IconButton>
    </div>
  )
}

export default Socialicons
