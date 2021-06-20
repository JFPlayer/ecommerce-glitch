const { config } = require('./config')
const app = require('./app');
require('./database')

app.listen(config.port, () => console.log(`listening on http://localhost:${config.port}`))
