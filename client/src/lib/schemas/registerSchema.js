import { z } from 'zod';

export const registerSchema = z
  .object({
    name: z.string().min(1, { message: 'Este campo es obligatorio.' }),
    lastName: z.string().min(1, { message: 'Este campo es obligatorio.' }),
    email: z
      .string()
      .min(1, { message: 'Este campo es obligatorio.' })
      .email({ message: 'Este campo es obligatorio.' }),
    password: z.string().min(1, { message: 'Este campo es obligatorio.' }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Este campo es obligatorio.' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden.',
    path: ['confirmPassword'],
  });
