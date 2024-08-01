import MaxWidthContainer from '@/components/MaxWidthContainer';
import SearchCard from '@/components/SearchCard';
import { Separator } from '@/components/ui/separator';
import POSTS from '@/data/posts';

const SearchPage = () => {
  return (
    <div className="min-h-screen py-20">
      <MaxWidthContainer>
        <p className="font-bold text-3xl">Eventos</p>
        <Separator className="mt-3 mb-4" />
        <div className="flex gap-6">
          <div className="flex-1 flex flex-col gap-3">
            {POSTS.map((post) => (
              <SearchCard key={post.id} {...post} />
            ))}
          </div>
          <div className="max-md:hidden">
            <div className="bg-secondary rounded-sm w-[200px] h-[200px] sticky top-[145px]" />
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default SearchPage;
