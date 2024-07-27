import { useLocation } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

const AuthCard = () => {
  const { pathname } = useLocation();

  const isLoginPage = pathname === '/login';

  return (
    <div className="max-w-60 w-full">
      <h1 className="font-bold text-3xl mb-5">
        {isLoginPage ? 'Ingreso' : 'Crear cuenta'}
      </h1>
      <div>{isLoginPage ? <LoginForm /> : <RegisterForm />}</div>
      <div className="text-center mt-2">
        {isLoginPage ? (
          <a
            href="/register"
            className={cn(buttonVariants({ variant: 'link' }))}
          >
            ¿No tenés cuenta?
          </a>
        ) : (
          <a href="/login" className={cn(buttonVariants({ variant: 'link' }))}>
            ¿Ya tenés cuenta?
          </a>
        )}
      </div>
    </div>
  );
};

export default AuthCard;
