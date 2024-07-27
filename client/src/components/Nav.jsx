import MaxWidthContainer from './MaxWidthContainer';

import { userStore } from '@/store/user';
import { Button, buttonVariants } from './ui/button';

const Nav = () => {
  const { user, removeUser } = userStore((state) => state);
  return (
    <div className="fixed w-full flex justify-center glassmorphism py-3">
      <MaxWidthContainer>
        <nav className="flex justify-between items-center">
          <a className="font-bold text-xl" href="/">
            Descubre Cordoba
          </a>
          <ul className="flex gap-x-3 items-center">
            {!user ? (
              <>
                <li>
                  <a
                    href="/login"
                    className={buttonVariants({ variant: 'outline' })}
                  >
                    Ingresar
                  </a>
                </li>
                <li>
                  <a
                    href="/register"
                    className={buttonVariants({ variant: 'default' })}
                  >
                    Crear cuenta
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a
                    href="/profile"
                    className={buttonVariants({ variant: 'outline' })}
                  >
                    Mi perfil
                  </a>
                </li>
                <li>
                  <Button onClick={removeUser}>Logout</Button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </MaxWidthContainer>
    </div>
  );
};

export default Nav;
