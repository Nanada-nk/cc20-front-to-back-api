import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
//Routing
import userRouter from './routes/user.js'
import authRouter from './routes/auth.js'

const app = express()

//Basic middlewares
app.use(cors()) // Allows cross domains
app.use(morgan('dev')) // show logs
app.use(express.json()) // for read body 

//Routing GET รับ, POST เพิ่ม, PUT, PATCH, DELETE
//http://localhost:8000
// app.get('/', (req,res)=>{
//   // code body
//   res.json({message: "Hello CC20"})
// }) 
app.use('/api',userRouter)
app.use('/auth',authRouter)




const PORT = 8000
// start Server
// express().listen(8000,()=>console.log('Server is running on port 8000'))
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))