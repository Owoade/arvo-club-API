export const controllerParser = (req,res,callback)=>{
  try{
      callback(req,res)
  }catch(err){
     res.status(400).json(err instanceof Error  ? err : {message:err})
  }
}