import { createError } from "../utils/createError.js"
import prisma from "../config/prisma.js"

export const listUser = async (req, res, next) => {
  try {
    // code body
    // console.log(req.user)
    const user = await prisma.user.findMany({
      omit: {
        password: true
      }
    })
    console.log(user)

    res.json({
      message: "This is List All User",
      result: user
    })

  } catch (error) {
    next(error)
  }
}
export const updateRoleUser = async (req, res, next) => {
  try {
    //code body
    //1.Read params & body
    const { id } = req.params;
    const { role } = req.body;
    console.log(id, role)

    //2.Update to DB
    const user = await prisma.user.update({
      where: {
        id: Number(id)
      },
      data: {
        role: role
      }
    })

    res.json({ message: `Updated Role ${user.name}` })
  } catch (error) {
    next(error)
  }
}

export const deleteUser = async (req, res, next) => {
  try {
    //code body
    const { id } = req.params;
    const user = await prisma.user.delete({
      where: {
        id: Number(id),
      }
    })

    res.json({ message: "Delete success" })
  } catch (error) {
    next(error)
  }
}

export const getMe = async (req, res, next) => {
  try {
    const { id } = req.user
    console.log(id)
    const user = await prisma.user.findFirst({
      where: {
        id: Number(id)
      },
      omit: {
        password: true
      }
    })

    res.json({
      result: user,
      message: "Backend!!"
    })
  } catch (error) {
    next(error)
  }
}

export const readUser = async (req, res, next) => {
  try {
    //code body
    res.json({ message: "This is Read User" })

  } catch (error) {
    next(error)
  }
}

export const createUser = async (req, res, next) => {
  try {
    //code body
    res.json({ message: "This is POST User" })
  } catch (error) {
    next(error)
  }
}
