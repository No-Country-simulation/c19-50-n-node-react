import { useEffect, useState } from 'react';
import { Separator } from './ui/separator';
import Spinner from './Spinner';
import SearchCard from './SearchCard';
import { useUserStore } from '@/store/user.store';
import { deleteFavorite, fetchFavorites } from '@/services/favorite.service';

const FavoritesList = () => {
  const { user } = useUserStore((state) => state);

  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetchFavorites(user.id);

      if (result.ok) setFavorites(result.data);
      setIsLoading(false);
    })();
  }, []);

  const handleFavorite = (e, postId) => {
    e.stopPropagation();
    e.preventDefault();

    deleteFavorite({ userId: user.id, postId });
    setFavorites((prevState) =>
      prevState.filter((favorite) => favorite.postId !== postId)
    );
  };

  return (
    <div>
      <p className="font-bold text-3xl">Tus favoritos</p>
      <Separator className="mt-3 mb-4" />
      <div className="flex gap-6">
        {isLoading ? (
          <div className="flex-1 flex justify-center items-center h-[180px]">
            <Spinner size={28} strokeWidth={3} />
          </div>
        ) : (
          <div className="flex-1 flex flex-col gap-3">
            {favorites.length === 0 ? (
              <div className="text-center">
                Todavía no agregaste favoritos...
              </div>
            ) : (
              favorites.map((favorite) => (
                <SearchCard
                  key={favorite.post.id}
                  {...favorite.post}
                  includeFavorite={true}
                  handleFavorite={handleFavorite}
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesList;
