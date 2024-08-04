import { formatPrice } from '@/lib/formatPrice';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Link } from 'react-router-dom';

const PostCard = ({ id, title, date, price, category, image }) => {
  return (
    <Card className="overflow-hidden max-w-[280px] h-[400px]">
      <Link to={`/posts/${id}`}>
        <div className="flex flex-col h-full">
          <img src={image} alt="image" className="min-h-[200px] object-cover" />
          <div className="p-3 flex flex-col h-full">
            <p className="text-xs font-medium">{date}</p>
            <p className="truncate font-bold text-xl">{title}</p>
            <p className="mt-1 text-lg font-medium">{formatPrice(price)}</p>
            <p className="mt-auto">
              <Badge>{category}</Badge>
            </p>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default PostCard;
