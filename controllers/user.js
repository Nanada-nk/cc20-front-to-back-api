import { createError } from "../utils/createError.js"

export const listUser = (req, res,next) => {
try {
    // code body
    //1.check Email
  if(true) {
    // throw new Error("Email already exits!!!"); 
    createError(400,"Email already exits!!!")
  } else {
    throw new Error("Password is Invalid!!!")
  }
  res.json({ message: "This is List All User" })
} catch (error) {
  next(error)
}
}

export const readUser = (req, res) => {
  //code body
  res.json({ message: "This is Read User" })
}

export const createUser = (req, res) => {
  //code body
  res.json({ message: "This is POST User" })
}

export const updateRoleUser = (req, res) => {
  //code body
  res.json({ message: "This is Update Role User" })
}

export const deleteUser = (req, res) => {
  //code body
  res.json({ message: "This is Delete User" })
}