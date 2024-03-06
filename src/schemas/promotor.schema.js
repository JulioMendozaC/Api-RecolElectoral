import {z} from "zod";

export const promotorSchema = z.object({
  nombre: z.string({
    required_error: "El nombre es requerido",
  })
});

