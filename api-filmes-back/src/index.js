const express = require('express')
const cors = require('cors');

const app = express()
const port = 3000

require('dotenv').config({ path: '../.env' })
require('./app/routes/movieRoutes')(app) 

app.use(cors())
app.listen(port, () => console.log(`Server running at http://localhost:${port}/`));