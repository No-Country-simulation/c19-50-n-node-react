import { useState } from 'react';
import { Input } from './ui/input';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

const SearchInput = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // const formattedQueryString = inputValue.replace(/\s+/g, '-').trim();

    if (inputValue.length > 0) {
      navigate.push(`/search?s=${inputValue}&t=sale`);
    } else {
      navigate.push(`/search?t=sale`);
    }
  };

  return (
    <div className="flex-1 min-w-0">
      <form onSubmit={handleSubmit} className="flex">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Buscar eventos..."
          className="rounded-r-none focus-visible:ring-0 w-auto focus-visible:ring-offset-0 max-md:flex-1 min-w-0 border-r-0 border-foreground"
        />
        <Button
          type="submit"
          className="rounded-l-none h-10 w-10 p-0 flex-shrink-0"
        >
          <Search />
        </Button>
      </form>
    </div>
  );
};

export default SearchInput;
