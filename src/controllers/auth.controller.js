
import User from '../models/user.medel.js'
import bcrypt from 'bcryptjs'
import { CreateAccessToken } from '../libs/jwt.js'
import jwt from "jsonwebtoken";
import 'dotenv/config'

export const register = async (req, res) => {

    const { email, password, username } = req.body

    const userFound = await User.findOne({username})

    if(userFound)
    return res.status(400).json(["El usuarios ya esa en uso"])

    try {

        const hash = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: hash,
        })

        const userSave = await newUser.save()
        const token = await CreateAccessToken({id: userSave._id});


        res.cookie("token", token);

        res.json({
            id: userSave.id,
            username: userSave.username,
            email: userSave.email
        })

    } catch (error) {
        res.status(500).json({message: error.message});
    }

}

export const login = async (req, res) => {

    const { username, password } = req.body

    try {

        const userFound = await User.findOne({username});
        if (!userFound) return res.status(400)(json({message: "userr no found"}));

        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) res.status(400)(json({message: "invalid password"}));


        const token = await CreateAccessToken({id: userFound._id});

        res.cookie("token", token);
        res.json({
          id: userFound._id,
          username: userFound.username,
          email: userFound.email,
        })

    } catch (error) {
        res.status(500).json( error);
    }

}

export const logout = (req, res) => {
    res.cookie("token", "", {
      expires: new Date(0),
    });
    return res.sendStatus(200);
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id);
  
    if (!userFound) return res.status(400).json({message: "User no found"});
  
    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  };
  
  export const verifyToken = async (req, res) => {
    const {token} = req.cookies;
  
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, user) => {
      if (err) return res.status(401).json({message: "Unauthorized"});
  
      const userFound = await User.findById(user.id);
      if (!userFound) return res.status(401).json({message: "Unauthorized"});
  
      return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
      });
    });
  };