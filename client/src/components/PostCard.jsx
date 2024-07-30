import { formatPrice } from '@/lib/formatPrice';
import { Badge } from './ui/badge';
import { Card } from './ui/card';

const PostCard = ({ title, date, price, category, image }) => {
  return (
    <Card className="flex flex-col max-w-[280px] h-[400px] overflow-hidden ">
      <img src={image} alt="image" className="min-h-[200px] object-cover" />
      <div className="p-3 flex flex-col h-full">
        <p className="text-xs font-medium">{date}</p>
        <p className="truncate font-bold text-xl">{title}</p>
        <p className="mt-1 text-lg font-medium">{formatPrice(price)}</p>
        <p className="mt-auto">
          <Badge>{category}</Badge>
        </p>
      </div>
    </Card>
  );
};

export default PostCard;
