import AuthCard from '@/components/AuthCard';
import MaxWidthContainer from '@/components/MaxWidthContainer';

const AuthPage = () => {
  return (
    <div className="py-20 min-h-screen flex justify-center items-center">
      <MaxWidthContainer className="flex justify-center">
        <AuthCard />
      </MaxWidthContainer>
    </div>
  );
};

export default AuthPage;
