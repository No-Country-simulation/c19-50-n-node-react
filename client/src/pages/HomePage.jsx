import MaxWidthContainer from '@/components/MaxWidthContainer';
import PostCardCarousel from '@/components/PostCardCarousel';

const HomePage = () => {
  return (
    <div>
      <MaxWidthContainer className="mb-20">
        <section className="min-h-screen flex justify-center items-center py-20">
          <img
            src="banner-nc.jpg"
            alt="banner"
            className="rounded-md object-cover max-h-[720px]"
          />
        </section>
        <section>
          <p className="font-bold text-3xl mb-3">Próximos eventos</p>
          <PostCardCarousel />
        </section>
      </MaxWidthContainer>
    </div>
  );
};

export default HomePage;
