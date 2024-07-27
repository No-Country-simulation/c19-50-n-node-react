import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { userStore } from '@/store/user';
import { Link } from 'react-router-dom';

import { Menu } from 'lucide-react';

const NavSheet = () => {
  const { user, removeUser } = userStore((state) => state);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="p-2">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <ul className="flex flex-col gap-y-3">
          {!user ? (
            <>
              <li>
                <SheetTrigger asChild>
                  <Link
                    to="/login"
                    className={buttonVariants({ variant: 'link' })}
                  >
                    Ingresar
                  </Link>
                </SheetTrigger>
              </li>
              <li>
                <SheetTrigger asChild>
                  <Link
                    to="/register"
                    className={buttonVariants({ variant: 'link' })}
                  >
                    Crear cuenta
                  </Link>
                </SheetTrigger>
              </li>
            </>
          ) : (
            <>
              <li>
                <SheetTrigger asChild>
                  <Link
                    to="/profile"
                    className={buttonVariants({ variant: 'link' })}
                  >
                    Mi perfil
                  </Link>
                </SheetTrigger>
              </li>
              <li>
                <SheetTrigger asChild>
                  <Button onClick={removeUser} variant="link">
                    Cerrar sesión
                  </Button>
                </SheetTrigger>
              </li>
            </>
          )}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
