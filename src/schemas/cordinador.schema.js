import {z} from "zod";

export const coordinadorSchema = z.object({
  nombre: z.string({
    required_error: "El coordinador es requerido",
  })
});

