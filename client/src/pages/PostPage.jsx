import MaxWidthContainer from '@/components/MaxWidthContainer';
import PostDetails from '@/components/PostDetails';
import Spinner from '@/components/Spinner';
import useDebounce from '@/hooks/useDebounce';
import { createFavorite, deleteFavorite } from '@/services/favorite.service';
import { fetchPost } from '@/services/post.service';
import { useUserStore } from '@/store/user.store';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const { user } = useUserStore((state) => state);
  const params = useParams();
  console.log({ user });

  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(null);
  // const [favorites, setFavorites] = useState(true);
  const [post, setPost] = useState(null);

  const [debounceValue] = useDebounce(isFavorite);

  useEffect(() => {
    if (debounceValue !== null) {
      const data = { userId: user.id, postId: params.id };
      if (debounceValue) createFavorite(data);
      if (!debounceValue) {
        console.log('hola');
        deleteFavorite(data);
      }
    }
  }, [debounceValue]);

  useEffect(() => {
    (async () => {
      const postResult = await fetchPost(params.id);
      if (postResult.ok) setPost(postResult.data);

      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="min-h-screen py-20">
      {isLoading ? (
        <div className="flex justify-center">
          <Spinner size={28} strokeWidth={3} />
        </div>
      ) : (
        <MaxWidthContainer>
          <PostDetails
            {...post}
            isFavorite={isFavorite}
            handleFavorite={() => setIsFavorite((prevState) => !prevState)}
          />
        </MaxWidthContainer>
      )}
    </div>
  );
};

export default PostPage;
