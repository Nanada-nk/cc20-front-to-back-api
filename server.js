import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
//Routing
import userRouter from './routes/user.js'
import authRouter from './routes/auth.js'
import error from './utils/error.js'
import notFound from './utils/notFound.js'

const app = express()

//Basic middlewares
app.use(cors()) // Allows cross domains
app.use(morgan('dev')) // show logs
app.use(express.json()) // for read body 

//Routing GET รับ, POST เพิ่ม, PUT, PATCH, DELETE
app.use('/api',userRouter)
app.use('/auth',authRouter)


//Error Handling
app.use(error)
//404
app.use(notFound)

const PORT = 8000
// start Server
// express().listen(8000,()=>console.log('Server is running on port 8000'))
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))