import { useEffect, useState } from 'react';
import MaxWidthContainer from '@/components/MaxWidthContainer';
import SearchCard from '@/components/SearchCard';
import { Separator } from '@/components/ui/separator';
import Spinner from '@/components/Spinner';
import { fetchPosts } from '@/services/post.service';

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetchPosts();

      if (result.ok) setPosts(result.data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="min-h-screen py-20">
      <MaxWidthContainer>
        <p className="font-bold text-3xl">Eventos</p>
        <Separator className="mt-3 mb-4" />
        <div className="flex gap-6">
          {isLoading ? (
            <div className="flex-1 flex justify-center items-center h-[180px]">
              <Spinner size={28} strokeWidth={3} />
            </div>
          ) : (
            <div className="flex-1 flex flex-col gap-3">
              {posts.map((post) => (
                <SearchCard key={post.id} {...post} />
              ))}
            </div>
          )}
          <div className="max-md:hidden">
            <div className="bg-gray-500 rounded-sm w-[280px] h-[280px] sticky top-[145px]" />
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default SearchPage;
