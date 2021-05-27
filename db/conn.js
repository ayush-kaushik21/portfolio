const mongoose = require('mongoose')

const DB =
  'mongodb+srv://ayushKaushik:9027ayush@cluster0.5mfi5.mongodb.net/PortfolioDatabase?retryWrites=true&w=majority'

mongoose
  .connect(process.env.MONGODB_URI || DB, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Connection Successful')
  })
  .catch((err) => {
    console.log(err)
  })
