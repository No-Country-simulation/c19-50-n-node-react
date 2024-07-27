import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Este campo es obligatorio.' })
    .email({ message: 'El email debe ser válido.' }),
  password: z.string().min(1, { message: 'Este campo es obligatorio.' }),
});
