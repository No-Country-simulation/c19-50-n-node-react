import { useState } from 'react';
import { Input } from './ui/input';
import LoadingButton from './LoadingButton';
import { useUserStore } from '@/store/user.store';
import { v4 as uuid } from 'uuid';

const QuestionInput = ({ postId, handleAskQuestion, questionIsLoading }) => {
  const { user } = useUserStore((state) => state);
  const [userInput, setUserInput] = useState('');

  return (
    <div className="flex gap-x-3">
      <Input
        type="text"
        placeholder="Haz tu pregunta..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <LoadingButton
        disabled={userInput.length === 0}
        onClick={() =>
          handleAskQuestion({
            id: uuid(),
            user: {
              firstName: user.name,
              lastName: user.lastName,
            },
            userId: user.id,
            postId,
            content: userInput,
          })
        }
        isLoading={questionIsLoading}
      >
        Enviar
      </LoadingButton>
    </div>
  );
};

export default QuestionInput;
