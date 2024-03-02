import {z} from "zod";

export const dataSchema = z.object({
    nombre: z.string({
    required_error: "El nombre es requerido",
  }),
  apellido_p: z
    .string({
      required_error: "El apelldio paterno es requerido",
    }),
    apellido_m: z
    .string({
      required_error: "El apelldio materno es requerido",
    }),
    curp: z.string({
        required_error: "El curp es requerido",
      }),
    // fecha_nacimiento: z.string({
    //     required_error: "La fecha denacimiento es requerida",
    //   }),
      sexo: z.string({
        required_error: "El sexo es requerido",
      }),
      calle: z.string({
        required_error: "La calle es requerida",
      }),
      calle: z.string({
        required_error: "La calle es requerida",
      }),
      No_ext: z.string({
        required_error: "El numero exterior es requerido",
      }),
      No_int: z.string({
        required_error: "El numero interior es requerido",
      }),
      colonia_barrio: z.string({
        required_error: "La colonia o barrio es requerido",
      }),
      colonia_barrio: z.string({
        required_error: "La colonia o barrio es requerido",
      }),
      codigo_postal: z.string({
        required_error: "El codigo postal es requerido",
      }),
      clave_electoral: z.string({
        required_error: "La clave electoral es requerida",
      }),
      seccion: z.string({
        required_error: "La seccion es requerida",
      }),
      seccion: z.string({
        required_error: "La seccion es requerida",
      }),
    //   fecha_vigencia: z.string({
    //     required_error: "La fecha de vigencia es requerida",
    //   }),
    coordinador: z.string({
        required_error: "El coordinador es requerido",
      }),
      promotor: z.string({
        required_error: "El promotor es requerido",
      }),
});


