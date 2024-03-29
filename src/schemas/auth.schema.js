import {z} from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "Username is requiered",
  }),
  rol: z.string({
    required_error: "Username is requiered",
  }),
  password: z
    .string({
      required_error: "Password is requiered",
    })
    .min(6, {
      required_error: "Password must be at least 6 chracter",
    }),
});
export const loginSchema = z.object({
  username: z.string({
    required_error: "username is requiered",
  }),
  password: z
    .string({
      required_error: "Password is requiered",
    })
    .min(6, {
      required_error: "Password must be at least 6 chracter",
    }),
});
