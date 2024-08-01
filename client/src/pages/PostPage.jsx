import MaxWidthContainer from '@/components/MaxWidthContainer';
import PostDetails from '@/components/PostDetails';
import Spinner from '@/components/Spinner';
import useDebounce from '@/hooks/useDebounce';
import { fetchPost } from '@/services/post.service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(null);
  // const [favorites, setFavorites] = useState(true);
  const [post, setPost] = useState(null);

  // console.log({ params });
  const [debounceValue] = useDebounce(isFavorite);

  useEffect(() => {
    console.log({ debounceValue });
  }, [debounceValue]);

  useEffect(() => {
    (async () => {
      const result = await fetchPost(params.id);

      if (result.ok) setPost(result.data);
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
