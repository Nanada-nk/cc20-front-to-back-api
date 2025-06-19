const error = (err,req,res,next)=>{
  console.log(err.message)
  //code body
  res.status(err.code || 500).json({message: err.message || "Something Wrong!!!"})
}

export default error