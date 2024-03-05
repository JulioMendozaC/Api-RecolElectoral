import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const authRequiered = (req, res, next) =>{
    const {token} = req.cookies
   
    if(!token)
    return res.status(401).json({message: "No token, authorizatin deneid"})

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decode)=>{
        if (err) return res.status(403).json({message: 'invalidate token'})

        req.user = decode
        next()

    })

}