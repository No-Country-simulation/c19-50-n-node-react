import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import PostCard from './PostCard';

const PostCardCarousel = ({ posts }) => {
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
              category={post.category}
              image={post.image}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default PostCardCarousel;
