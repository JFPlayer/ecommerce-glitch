const mongoose = require('mongoose')
const { config } = require('./config')

const uri = config.mongodbUri

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then(db => console.log('Database connected'))
  .catch(error => console.log('Error: Database not connected'))