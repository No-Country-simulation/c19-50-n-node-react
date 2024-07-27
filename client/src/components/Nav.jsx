import MaxWidthContainer from './MaxWidthContainer';

import { userStore } from '@/store/user';
import { Button, buttonVariants } from './ui/button';
import SearchInput from './SearchInput';
import { useMediaQuery } from 'react-responsive';
import NavSheet from './NavSheet';

const Nav = () => {
  const { user, removeUser } = userStore((state) => state);

  const bigScreen = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return (
    <div className="z-10 fixed w-full flex justify-center glassmorphism py-3">
      <MaxWidthContainer>
        <nav className="flex justify-between items-center gap-3 max-md:gap-10">
          <a className="font-bold text-xl" href="/">
            {bigScreen ? 'Descubre Cordoba' : 'DC'}
          </a>
          <SearchInput />
          {bigScreen ? (
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
                    <Button onClick={removeUser}>Cerrar sesión</Button>
                  </li>
                </>
              )}
            </ul>
          ) : (
            <NavSheet />
          )}
        </nav>
      </MaxWidthContainer>
    </div>
  );
};

export default Nav;
