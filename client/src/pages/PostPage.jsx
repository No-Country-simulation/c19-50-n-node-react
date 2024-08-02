import MaxWidthContainer from '@/components/MaxWidthContainer';
import PostDetails from '@/components/PostDetails';
import Spinner from '@/components/Spinner';
import useDebounce from '@/hooks/useDebounce';
import {
  createFavorite,
  deleteFavorite,
  fetchFavoritesByPostId,
} from '@/services/favorite.service';
import { fetchPost } from '@/services/post.service';
import { fetchQuestionsByPostId } from '@/services/question.service';
import { useUserStore } from '@/store/user.store';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const { user } = useUserStore((state) => state);
  const params = useParams();

  console.log({ user });

  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState(null);
  const [isFavorite, setIsFavorite] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [questionIsLoading, setQuestionIsLoading] = useState(false);

  const [debounceValue] = useDebounce(isFavorite);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (debounceValue !== null) {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }

      const data = { userId: user.id, postId: params.id };
      if (debounceValue) createFavorite(data);
      if (!debounceValue) deleteFavorite(data);
    }
  }, [debounceValue]);

  useEffect(() => {
    (async () => {
      const postResult = await fetchPost(params.id);
      if (postResult.ok) setPost(postResult.data);
      const postFavorites = await fetchFavoritesByPostId(params.id);

      if (postFavorites.ok) {
        const { data } = postFavorites;
        const isFavorite =
          data.findIndex((post) => post.userId === user.id) >= 0;
        setFavorites(data);
        setIsFavorite(isFavorite);
      }

      const postQuestions = await fetchQuestionsByPostId(params.id);

      if (postQuestions.ok) {
        console.log(postQuestions.data);
        setQuestions(postQuestions.data);
      }
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const postResult = await fetchPost(params.id);
      if (postResult.ok) setPost(postResult.data);

      setIsLoading(false);
    })();
  }, []);

  const handleAskQuestion = (data) => {
    setQuestionIsLoading(true);
    setTimeout(() => {
      setQuestions((prevState) => [...prevState, data]);
      setQuestionIsLoading(false);
    }, 3000);
  };

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
            questions={questions}
            handleFavorite={() => setIsFavorite((prevState) => !prevState)}
            handleAskQuestion={handleAskQuestion}
            questionIsLoading={questionIsLoading}
          />
        </MaxWidthContainer>
      )}
    </div>
  );
};

export default PostPage;
