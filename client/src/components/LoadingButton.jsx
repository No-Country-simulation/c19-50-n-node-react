import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import Spinner from './Spinner';

const LoadingButton = ({
  children,
  isLoading,
  onClick,
  type,
  variant,
  className,
  form,
}) => {
  return (
    <Button
      form={form}
      onClick={onClick}
      type={type}
      variant={variant}
      className={cn('relative', className)}
      disabled={isLoading}
    >
      <span className={cn(isLoading && 'opacity-0')}>{children}</span>
      {isLoading && <Spinner />}
    </Button>
  );
};

export default LoadingButton;
