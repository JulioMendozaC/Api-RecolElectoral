import {z} from "zod";

export const seccionSchema = z.object({
  nombre: z.string({
    required_error: "El nombre es requerido",
  }),
  numero: z.string({
    required_error: "El numero es requerido",
  }),
  lista_nominal: z.string({
    required_error: "El valor de la lista es requerido",
  })
});

