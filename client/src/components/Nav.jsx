import MaxWidthContainer from './MaxWidthContainer';

import { userStore } from '@/store/user';
import { Button } from './ui/button';

const Nav = () => {
  const { user, removeUser } = userStore((state) => state);
  return (
    <div className="fixed w-full flex justify-center bg-background">
      <MaxWidthContainer>
        <nav className="flex justify-between items-center">
          <a href="/">Descubre Cordoba</a>
          <ul className="flex gap-x-3 items-center">
            {!user ? (
              <>
                <li>
                  <a href="/login">Ingresar</a>
                </li>
                <li>
                  <a href="/register">Crear cuenta</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href="/profile">Mi perfil</a>
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
