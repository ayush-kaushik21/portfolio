import { useState, useEffect } from 'react'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import { IconButton } from '@material-ui/core'

const ScrollBn = (showBelow) => {
  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  })

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='scrollBar__Button'>
      <IconButton onClick={handleClick}>
        <ExpandLessIcon className='expand__up' />
      </IconButton>
    </div>
  )
}

export default ScrollBn
