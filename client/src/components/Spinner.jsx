import { cn } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';

const Spinner = ({ size = 16, strokeWidth, className }) => {
  return (
    <LoaderCircle
      size={size}
      strokeWidth={strokeWidth}
      className={cn('animate-spin absolute', className)}
    />
  );
};

export default Spinner;
