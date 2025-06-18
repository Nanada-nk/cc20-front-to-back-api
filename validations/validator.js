// Validate with yup
import { object, ref, string } from 'yup'


export const registerSchema = object({
  email: string().email("Email is not correct").required("Email is required"),
  name: string().min(2,"Name more than 2 digits"),
  password: string().min(6,"Password more than 6 digits"),
  confirmPassword: string().oneOf([ref("password"),null],"Confirm Password is not match")
})


export const loginSchema = object({
  email: string().email("Email is not correct").required("Email is required"),
  password: string().min(6,"Password more than 6 digits"),
})


export const validate = (schema) => async(req, res, next) => {
  //code body
  try {
    // console.log("This is validate", req.body)
    await schema.validate(req.body, {abortEarly:false})
    next()
  } catch (error) {
    // console.log(error)
    const errMsg = error.errors.map((item)=>item)
    // console.log(errMsg)
    const errTxt = errMsg.join(",")
    // console.log(errTxt)
    const mergeErr = new Error(errTxt)
    console.log(mergeErr)
    next(mergeErr)
    
  }
}