const { config } = require('./config')
try {
  const app = require('./app');
  require('./database')
  
  app.listen(config.port, () => console.log(`listening on http://localhost:${config.port}`))
  
} catch (error) {
  console.error(error)
}
