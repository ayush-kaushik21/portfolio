const express = require('express')
const app = express()
require('./db/conn')
const Users = require('./models/userSchema')

const Port = process.env.PORT || 5000

app.use(express.json())

app.post('/contact', async (req, res) => {
  const { name, email, subject, message, date } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(422).json({ err: 'error h bhai' })
  }

  try {
    const newUser = new Users({ name, email, subject, message, date })

    const userQuery = await newUser.save()

    if (userQuery) {
      res.status(200).json({ message: 'successful' })
    } else {
      res.status(422).json({ message: 'unsuccessful' })
    }

    if (!userQuery) {
      console.log('error 422')
    }
  } catch (error) {
    res.status(422)
    console.log(`${error} h bahi`)
  }
})

// 3 step
if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'))

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(Port, () => {
  console.log(`Server is running at ${Port}`)
})
