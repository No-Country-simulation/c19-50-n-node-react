import { useLocation } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthCard = () => {
  const { pathname } = useLocation();

  return (
    <div className="max-w-60 w-full">
      <h1 className="font-bold text-3xl mb-5">
        {pathname === '/login' ? 'Ingreso' : 'Crear cuenta'}
      </h1>
      <div>{pathname === '/login' ? <LoginForm /> : <RegisterForm />}</div>
    </div>
  );
};

export default AuthCard;
