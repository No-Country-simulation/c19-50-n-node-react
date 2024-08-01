import { useEffect, useState } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import PostCard from './PostCard';
import Spinner from './Spinner';
import { fetchPosts } from '@/services/post.service';

const PostCardCarousel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetchPosts();

      if (result.ok) setPosts(result.data);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return (
      <div className="h-[400px] flex justify-center items-center">
        <Spinner size={28} strokeWidth={3} />
      </div>
    );
  }

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full"
    >
      <CarouselContent>
        {posts.map((post) => (
          <CarouselItem
            key={post.id}
            className="xs:basis-1/2 md:basis-1/3 xl:basis-1/4 select-none"
          >
            <PostCard
              id={post.id}
              title={post.title}
              date={post.date}
              price={post.price}
              category={post.category.name}
              image={post.image}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default PostCardCarousel;
