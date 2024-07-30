'use client';

import { useState } from 'react';

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
import { loginSchema } from '@/lib/schemas/loginSchema';
import { useUserStore } from '@/store/user';

const LoginForm = () => {
  const { setUser } = useUserStore((state) => state);

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values) => {
    setIsLoading(true);
    setUser({
      email: values.email,
      name: 'name',
      lastName: 'lastName',
      token: 'token',
    });
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
        <div className="w-full">
          <LoadingButton
            isLoading={isLoading}
            type="submit"
            className="w-full mt-5"
          >
            Iniciar
          </LoadingButton>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
