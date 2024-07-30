import { Link } from 'react-router-dom';

import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';

const NavIconLink = ({
  id,
  title,
  to,
  icon,
  pathname,
  variant,
  textIsHidden,
  listItemStyles,
  linkSelectedStyles,
  className,
}) => {
  const pathnameSplit = pathname.split('/');

  const linkIsSelected = pathnameSplit[pathnameSplit.length - 1] === id;

  return (
    <li className={cn(listItemStyles)}>
      <Link
        to={to}
        className={cn(
          variant && buttonVariants({ variant: variant }),
          'p-0 max-md:leading-none max-md:h-auto max-md:p-2 max-md:rounded-full flex items-center gap-3',
          linkIsSelected
            ? `${linkSelectedStyles || 'underline'} pointer-events-none`
            : 'text-foreground',
          className
        )}
      >
        {icon}
        <span
          className={cn('max-md:hidden truncate', textIsHidden && 'hidden')}
        >
          {title}
        </span>
      </Link>
    </li>
  );
};

export default NavIconLink;
