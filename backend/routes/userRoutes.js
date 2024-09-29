import express from 'express'
import { login_controller, register_controller } from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/login', login_controller)
userRouter.post('/register', register_controller)


export default userRouter