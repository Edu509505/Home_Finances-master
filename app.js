import express from 'express'

import database from './db/database.js'
import routes from './routes.js'
import './models/associations.js'

database.sync()

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3000, () => {
    console.log('O servidor está escutando na porta 3000!')
})
