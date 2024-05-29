import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

export const protection = (req,res,next)=>{

    // get bearer token from headers of req
    const bearerToken = req.headers.authorization
    // if bearer token not available
    if(!bearerToken){
        return res.send({message:"unauthorised login to continue"})
    }
    // extract token from bearer token
    const token = bearerToken.spilt(' ')[1]
    try{
        jwt.verify(token,process.env.SECRET_KEY)
    }catch(err){
        next(err)
    }

}
