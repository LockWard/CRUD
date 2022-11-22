import express from 'express'
import employeesRoutes from './routes/employee.js'
import indexRoutes from './routes/index.js'

const app = express()

app.use(express.json())

app.use(employeesRoutes)
app.use(indexRoutes)

app.listen(3000)