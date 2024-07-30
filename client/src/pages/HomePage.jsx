import PostCard from '@/components/PostCard';
import POSTS from '@/data/posts';

const HomePage = () => {
  const post = POSTS[1];

  return (
    <div className="min-h-screen flex justify-center items-center">
      <PostCard
        title={post.title}
        date={post.date}
        price={post.price}
        category={post.category}
        image={post.image}
      />
    </div>
  );
};

export default HomePage;
