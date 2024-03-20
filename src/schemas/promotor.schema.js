import {z} from "zod";

export const promotorSchema = z.object({
  nombre: z.string({
    required_error: "El nombre es requerido",
  }),
  apellido_pat: z.string({
    required_error: "El apelliodo paterno es requerido",
  }),
  apellido_mat: z.string({
    required_error: "El apelliodo paterno es requerido",
  }),
});

