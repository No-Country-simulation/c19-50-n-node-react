import { Heart } from 'lucide-react';
import { Separator } from './ui/separator';
import { formatPrice } from '@/lib/formatPrice';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const PostDetails = ({
  title,
  date,
  image,
  address,
  price,
  content,
  isFavorite,
  questions,
  handleFavorite,
}) => {
  return (
    <div>
      <p>{date}</p>
      <p className="text-3xl font-bold truncate">{title}</p>
      <Separator className="mt-3 mb-4" />
      <div className="flex gap-6 max-md:flex-col">
        <div className="flex flex-1 justify-center bg-gray-500 overflow-hidden rounded-sm max-h-[444px] ">
          <img src={image} alt="image" className="object-cover" />
        </div>
        <div className="w-[320px] max-md:w-full p-6 flex flex-col gap-y-4 rounded-sm border bg-secondary select-none">
          <div className="flex justify-end">
            <div
              onClick={handleFavorite}
              className={cn(
                'cursor-pointer flex justify-center',
                isFavorite && 'text-red-heart',
                !isFavorite && 'hover:text-gray-500 '
              )}
            >
              <Heart strokeWidth={2.5} fill={isFavorite ? '#ff3944' : 'none'} />
            </div>
          </div>
          <div>
            <p className="text-sm">Dirección:</p>
            <p className="text-lg font-semibold">{address}</p>
          </div>
          <div>
            <p className="text-sm">Precio:</p>
            <p className="text-lg font-semibold">{formatPrice(price)}</p>
          </div>
          <Button className="mt-auto max-md:mt-6">Reservar</Button>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-xl font-bold">Detalles</p>
        <p className="text-lg">{content}</p>
      </div>
      <Separator className="mt-10 mb-10" />
      <div className="mt-10">
        <p className="text-xl font-bold">Preguntas</p>
        <div className="mt-10">
          {questions.length === 0 ? (
            <p className="text-center">No se hicieron preguntas todavia...</p>
          ) : (
            <div className="flex flex-col gap-3">
              {questions.map((question) => (
                <div
                  key={question.id}
                  className="rounded-sm bg-secondary border p-3"
                >
                  <p className="font-bold">
                    {question.user?.firstName || ''}{' '}
                    {question.user?.lastName || ''}:
                  </p>
                  <p className="text-lg">{question.content}</p>
                  <p className="text-sm mt-6 text-center">
                    - Todavía no hubo una respuesta -
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
