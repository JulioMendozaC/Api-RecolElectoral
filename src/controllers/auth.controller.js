
import User from '../models/user.medel.js'
import bcrypt from 'bcryptjs'
import { CreateAccessToken } from '../libs/jwt.js'
import jwt from "jsonwebtoken";
import 'dotenv/config'

export const register = async (req, res) => {

  const { rol, password, username } = req.body

  const userFound = await User.findOne({ username })

  if (userFound)
    return res.status(400).json(["El usuarios ya esa en uso"])

  try {

    const hash = await bcrypt.hash(password, 10)

    const newUser = new User({
      username,
      rol,
      password: hash,
    })

    const userSave = await newUser.save()
    const token = await CreateAccessToken({ id: userSave._id });


    res.cookie("token", token);

    res.json({msg :'Usuario registrado'})

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}

export const login = async (req, res) => {

  try {
    const { username, password } = req.body;
    const userFound = await User.findOne({ username });

    if (!userFound)
      return res.status(400).json({
        message: ["El usuario es incorrecto"],
      });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) {
      return res.status(400).json({
        message: ["La contraseña es incorrecta"],
      });
    }

    const token = await CreateAccessToken({ id: userFound._id });

    res.cookie("token", token,
      {
        sameSite: 'none',
        secure: true,
      });
    res.json({
      id: userFound._id,
      username: userFound.username,
      rol: userFound.rol,
    })
  } catch (error) {
    return res.status(500).json({ message: error.message });
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

  if (!userFound) return res.status(400).json({ message: "User no found" });

  return res.json({
    id: userFound._id,
    username: userFound.username,
  });
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  jwt.verify(token, process.env.TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: "Unauthorized erros" });

    const userFound = await User.findById(user.id);
    if (!userFound) return res.status(401).json({ message: "Unauthorized user no found" });

    return res.json({
      id: userFound._id,
      username: userFound.username,
      rol: userFound.rol,
      email: userFound.email,
    });
  });
};

export const Users = async (req, res) => {
  const data = await User.find()
  res.json(data)

}

export const OneUser = async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    if (!data) return res.status(404).json({ message: 'data no found' })
    res.json(data)
  } catch (error) {
    return res.status(404).json({ message: "data no found" })
  }
}

export const deleteUser = async (req, res) => {
  try {
      const data = await User.findByIdAndDelete(req.params.id);
      return res.json({
          msg: ['Datos eliminados correctament']
      })

  } catch (error) {
      return res.status(404).json({ message: "data no found" })

  }
};


export const updateUser = async (req, res) => {
  try {
      const data = await User.findByIdAndUpdate(req.params.id, req.body, {
          new: true
      });
      if (!data) return res.status(404).json({ message: 'data no found' })
      res.json({
          msg: ['Datos actualizados'],
          data: [data]
      })
  } catch (error) {
      return res.status(404).json({ message: "data no found" })

  }
};
