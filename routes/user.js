import express from 'express'
// Controllers
import { createUser, listUser, readUser, updateRoleUser, deleteUser } from '../controllers/user.js'

const router = express.Router()

//ENDPOINT http://localhost:8000/api/users
router.get('/users', listUser)
//ENDPOINT http://localhost:8000/api/user
router.get("/user", readUser)

router.post("/user", createUser)

router.patch("/user/role/:id", updateRoleUser)

router.delete("/user/role/:id", deleteUser)

//Export
export default router