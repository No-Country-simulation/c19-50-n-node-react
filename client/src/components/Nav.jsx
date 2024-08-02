import MaxWidthContainer from './MaxWidthContainer';

import { useUserStore } from '@/store/user.store';
import { buttonVariants } from './ui/button';
import SearchInput from './SearchInput';
import { useMediaQuery } from 'react-responsive';
import NavSheet from './NavSheet';
import { Link } from 'react-router-dom';

const Nav = () => {
  const { user } = useUserStore((state) => state);

  const bigScreen = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return (
    <div className="z-10 fixed w-full glassmorphism py-3">
      <MaxWidthContainer>
        <nav className="flex justify-between items-center gap-3 max-md:gap-10">
          <Link className="font-bold text-xl" to="/">
            <img src="logo-cordoba.png" alt="" className="w-[70px]" />
          </Link>
          <SearchInput />
          {bigScreen ? (
            <ul className="flex gap-x-3 items-center">
              {!user ? (
                <>
                  <li>
                    <Link
                      to="/login"
                      className={buttonVariants({ variant: 'outline' })}
                    >
                      Ingresar
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className={buttonVariants({ variant: 'default' })}
                    >
                      Crear cuenta
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/profile"
                      className={buttonVariants({ variant: 'outline' })}
                    >
                      Mi perfil
                    </Link>
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
