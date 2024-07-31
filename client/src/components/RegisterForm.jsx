import { useState } from 'react';
import { useUserStore } from '@/store/user.store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import LoadingButton from './LoadingButton';
import PasswordInput from './PasswordInput';

import { registerSchema } from '@/lib/schemas/registerSchema';
import { register } from '@/services/auth.service';

const RegisterForm = () => {
  const { setUser } = useUserStore((state) => state);

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values) => {
    setIsLoading(true);
    const result = await register({
      email: values.email,
      name: values.name,
      lastName: values.lastName,
      password: values.password,
    });

    if (result.ok) {
      setUser(result.data);
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-12 flex flex-col items-center"
      >
        <FormField
          control={form.control}
          name="name"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="nombre" {...field} />
              </FormControl>
              <FormMessage className="absolute p-0 m-0" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Apellido</FormLabel>
              <FormControl>
                <Input placeholder="apellido" {...field} />
              </FormControl>
              <FormMessage className="absolute p-0 m-0" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@email.com" {...field} />
              </FormControl>
              <FormMessage className="absolute p-0 m-0" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <PasswordInput {...field} />
              </FormControl>
              <FormMessage className="absolute p-0 m-0" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          disabled={isLoading}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Confirmar contraseña</FormLabel>
              <FormControl>
                <PasswordInput {...field} />
              </FormControl>
              <FormMessage className="absolute p-0 m-0" />
            </FormItem>
          )}
        />
        <div className="w-full">
          <LoadingButton
            isLoading={isLoading}
            type="submit"
            className="w-full mt-5"
          >
            Crear
          </LoadingButton>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
