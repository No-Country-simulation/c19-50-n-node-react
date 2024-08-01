import { Link } from 'react-router-dom';
import { Card } from './ui/card';
import { formatPrice } from '@/lib/formatPrice';
import { Badge } from './ui/badge';

const SearchCard = ({ id, title, date, price, category, image }) => {
  return (
    <Card className="overflow-hidden">
      <Link to={`/posts/${id}`} className="flex gap-3 p-3">
        <img
          src={image}
          alt="image"
          className="h-[180px] w-[180px] max-sm:h-[120px] max-sm:w-[120px] rounded-sm object-cover "
        />
        <div className="overflow-hidden flex flex-col flex-1">
          <p className="text-sm truncate">{date}</p>
          <p className="text-xl font-bold line-clamp-1">{title}</p>
          <p className="text-xl font-bold truncate">{formatPrice(price)}</p>
          <p className="mt-auto max-xs:hidden">
            <Badge>{category.name}</Badge>
          </p>
        </div>
      </Link>
    </Card>
  );
};

export default SearchCard;
