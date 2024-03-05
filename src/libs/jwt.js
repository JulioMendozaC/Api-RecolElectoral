import jwt from "jsonwebtoken";
import 'dotenv/config'

 export function CreateAccessToken(payload) {
 return  new Promise((res, rej) => {
    jwt.sign(
      payload,
      process.env.TOKEN_SECRET,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) rej(err);
        res(token);
      }
    );
  });
}
