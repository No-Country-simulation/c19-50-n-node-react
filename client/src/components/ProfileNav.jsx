// import LogoutButton from '../logout-button';

import { useLocation } from 'react-router-dom';
import NavIconLink from './NavIconLink';
import { Home, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { useUserStore } from '@/store/user.store';

const LINKS = [
  {
    id: 'profile',
    title: 'Mi perfil',
    to: '/profile',
    icon: <Home className="md:hidden" />,
  },
  {
    id: 'favorites',
    title: 'Mis favoritos',
    to: '/profile/favorites',
    icon: <Heart className="md:hidden" />,
  },
];

const ProfileNav = () => {
  const { removeUser } = useUserStore((state) => state);

  const { pathname } = useLocation();

  return (
    <div className="flex justify-between md:items-center">
      <ul className="flex space-x-6 items-center max-md:space-x-4 rounded-md md:px-3 max-md:py-1 border">
        {LINKS.map((link) => (
          <NavIconLink
            key={link.id}
            id={link.id}
            title={link.title}
            to={link.to}
            icon={link.icon}
            pathname={pathname}
            variant="link"
            linkSelectedStyles="max-md:bg-primary max-md:text-background"
            listItemStyles="max-md:min-w-16 max-md:flex max-md:justify-center"
            className="max-md:hover:bg-secondary"
          />
        ))}
      </ul>
      <div className="flex flex-col">
        <Button onClick={removeUser} className="flex-grow">
          Cerrar sesión
        </Button>
      </div>
    </div>
  );
};

export default ProfileNav;
