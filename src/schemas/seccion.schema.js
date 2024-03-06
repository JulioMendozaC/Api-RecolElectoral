import {z} from "zod";

export const seccionSchema = z.object({
  nombre: z.string({
    required_error: "El nombre es requerido",
  }),
  numero: z.number({
    required_error: "El numero es requerido",
  })
});

