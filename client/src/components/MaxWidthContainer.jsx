import { cn } from '@/lib/utils';

const MaxWidthContainer = ({ children, className }) => {
  return <div className={cn('max-w-7xl w-[90%]', className)}>{children}</div>;
};

export default MaxWidthContainer;
