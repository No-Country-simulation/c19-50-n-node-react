import MaxWidthContainer from '@/components/MaxWidthContainer';
import ProfileNav from '@/components/ProfileNav';
import { Outlet } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <div className="min-h-screen py-20">
      <MaxWidthContainer className="flex flex-col space-y-6">
        <ProfileNav />
        <Outlet />
      </MaxWidthContainer>
    </div>
  );
};

export default ProfilePage;
