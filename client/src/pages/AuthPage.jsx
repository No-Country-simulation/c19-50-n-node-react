import AuthCard from '@/components/AuthCard';
import MaxWidthContainer from '@/components/MaxWidthContainer';

const AuthPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <MaxWidthContainer className="my-20 flex justify-center">
        <AuthCard />
      </MaxWidthContainer>
    </div>
  );
};

export default AuthPage;
