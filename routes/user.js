import express from 'express'
// Controllers
import { createUser, 
  listUser, 
  readUser, 
  updateRoleUser, 
  deleteUser,
  getMe,
} from '../controllers/user.js'
import { authCheck } from '../middlewares/auth.middleware.js'

const router = express.Router()

//ENDPOINT http://localhost:8000/api/users
router.get('/users',authCheck, listUser)
//ENDPOINT http://localhost:8000/api/user
router.patch("/user/role/:id",authCheck, updateRoleUser)
router.delete("/user/:id",authCheck, deleteUser)

router.get("/getme",authCheck, getMe)


router.get("/user", readUser)
router.post("/user", createUser)
//Export
export default router