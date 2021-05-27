import { useState } from 'react'
import location from '../images/location.svg'
import contact from '../images/contact.svg'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  let name, value

  const [user, setUser] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  let changeHandler = (e) => {
    name = e.target.name
    value = e.target.value

    setUser({ ...user, [name]: value })
  }

  let submitForm = async (e) => {
    e.preventDefault()
    const { name, email, subject, message } = user

    const res = await fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    })

    const data = await res.json()

    if (res.status === 422 || !data) {
      const notify = (text) => toast.error(text)
      notify('Form Not Submitted')
    } else {
      const notifys = (text) => toast.success(text)
      notifys('Form Submitted')
      setUser({ name: '', email: '', subject: '', message: '' })
    }
  }

  return (
    <>
      <div className='contact__container'>
        <div className='container mx-auto'>
          <h3 className='contact__heading'>Let's Talk</h3>
          {/* <div className='contact__border'></div> */}
          <div className='row'>
            <div className='col-md-6 col-10 mx-auto contact__Img '>
              <div className='contact__Img__container'>
                <img
                  src={location}
                  alt='location'
                  className='img-fluid animateImg'
                />
              </div>
            </div>
            <div className='col-md-6 col-10 mx-auto contact__location '>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27923.473960672876!2d77.69585730966598!3d28.9745005553359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1621773309069!5m2!1sen!2sin'
                className='location__map'
                title='map'
              ></iframe>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 col-10 mx-auto contact__form order-1 order-lg-0'>
              <div className='card shadow-lg'>
                <form method='POST'>
                  <div class='form-group'>
                    <label for='exampleInputName'>Name</label>
                    <input
                      type='text'
                      onChange={changeHandler}
                      class='form-control'
                      id='exampleInputName'
                      name='name'
                      value={user.name}
                      required
                    />
                  </div>
                  <div class='form-group'>
                    <label for='exampleInputEmail1'>Email address</label>
                    <input
                      type='email'
                      onChange={changeHandler}
                      class='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      name='email'
                      value={user.email}
                      required
                    />
                    <small id='emailHelp' class='form-text text-muted'>
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class='form-group'>
                    <label for='exampleInputSubject'>Subject</label>
                    <input
                      type='text'
                      onChange={changeHandler}
                      class='form-control'
                      id='exampleInputSubject'
                      name='subject'
                      value={user.subject}
                      required
                    />
                  </div>
                  <div class='form-group'>
                    <label for='exampleFormControlMessage'>Message</label>
                    <textarea
                      class='form-control'
                      onChange={changeHandler}
                      id='exampleFormControlMessage'
                      value={user.message}
                      name='message'
                      rows='3'
                    ></textarea>
                  </div>
                  <button
                    type='submit'
                    class='submit__btn'
                    onClick={submitForm}
                  >
                    Send
                  </button>
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
                </form>
              </div>
            </div>
            <div className='col-md-6 col-10 mx-auto contact__Img__left order-0 order-lg-1'>
              <div className='contact__Img__container'>
                <img
                  src={contact}
                  alt='location'
                  className='img-fluid animateImg'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
