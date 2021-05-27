import { useRef } from 'react'
import Typed from 'react-typed'
import Button from './Button'
import user from '../images/undraw_Coding_re_iv62.svg'

import ChatIcon from '@material-ui/icons/Chat'
import SendIcon from '@material-ui/icons/Send'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import { IconButton } from '@material-ui/core'
import Socialicons from './Socialicons'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Introduction = () => {
  const myRef = useRef(null)

  let changeColor = () => {
    let oldClass = myRef.current.classList.toggle('new__heart__color')

    const notifys = (text) => toast.dark(text)

    if (oldClass) {
      notifys(`ThankYou!! 🤍🤍`)
    }
  }

  return (
    <div className='intro'>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className='row mx-auto'>
        <div className='col-11 col-md-6 mx-auto'>
          <div className='left'>
            <div className='card'>
              <div className='imgContainer'>
                <img src={user} alt='user' className='img-fluid' />
              </div>
              <h4>Ayush Kaushik</h4>
              <div className='border'></div>
              <Typed
                className='typed-text'
                strings={['Freelancer', 'Full Stack Developer']}
                backSpeed={40}
                typeSpeed={50}
                loop
              />
              <div className='insta__section'>
                <div className='insta__section__left'>
                  <IconButton onClick={changeColor}>
                    <FavoriteIcon ref={myRef} className='heart__color' />
                  </IconButton>
                  <IconButton>
                    <ChatIcon className='icon__color' />
                  </IconButton>
                  <IconButton>
                    <SendIcon className='icon__color' />
                  </IconButton>
                </div>
                <div
                  className='insta__section__right
              '
                >
                  <IconButton>
                    <BookmarkBorderIcon className='icon__color' />
                  </IconButton>
                </div>
              </div>
              {/* social */}
              <Socialicons />
            </div>
          </div>
        </div>
        <div className='col-11 col-md-6'>
          <div className='right'>
            <div className='myCard'>
              <h1>hello</h1>
              <h4 className='myCard__h4'>
                My name is <span>Ayush</span> and I'm a Full Stack Developer
              </h4>
              <div className='myCard__buttons'>
                <Button text={'resume'} />
                <Button text={'skills'} />
              </div>
              <h5>
                Hi, I'm a passionate coder with good problem solving and
                developing skills. I love to create designs and give them a life
                to it.
              </h5>
              <h5 className='tagline'>
                I am beginner in this field but not far away to become an
                expert.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
