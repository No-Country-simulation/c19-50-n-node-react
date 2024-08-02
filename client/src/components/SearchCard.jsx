import { Link } from 'react-router-dom';
import { Card } from './ui/card';
import { formatPrice } from '@/lib/formatPrice';
import { Badge } from './ui/badge';
import { Heart } from 'lucide-react';

const SearchCard = ({
  id,
  title,
  date,
  price,
  category,
  image,
  includeFavorite,
  handleFavorite,
}) => {
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
          {category && (
            <p className="mt-auto max-xs:hidden">
              <Badge>{category.name}</Badge>
            </p>
          )}
        </div>
        {includeFavorite && (
          <div
            onClick={(e) => handleFavorite(e, id)}
            className="text-red-heart mt-2 mr-3"
          >
            <Heart strokeWidth={2.5} fill="#ff3944" size={24} />
          </div>
        )}
      </Link>
    </Card>
  );
};

export default SearchCard;
