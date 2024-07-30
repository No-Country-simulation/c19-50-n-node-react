import MaxWidthContainer from '@/components/MaxWidthContainer';
import PostCardCarousel from '@/components/PostCardCarousel';
import POSTS from '@/data/posts';

const HomePage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <section className="w-full">
        <MaxWidthContainer>
          <p className="font-bold text-3xl mb-3">Próximos eventos</p>
          <PostCardCarousel posts={POSTS} />
        </MaxWidthContainer>
      </section>
    </div>
  );
};

export default HomePage;
