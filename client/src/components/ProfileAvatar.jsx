import { useUserStore } from '@/store/user.store';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ProfileAvatar = ({ previewImage, className }) => {
  const { user } = useUserStore((state) => state);

  const src = previewImage || user.image;

  return (
    <Avatar className={className}>
      {src && <AvatarImage src={src} className="object-cover" />}
      <AvatarFallback className="bg-gray-500 text-white font-medium">
        {user.name?.[0] || ''}
        {user.lastName?.[0] || ''}
      </AvatarFallback>
    </Avatar>
  );
};

export default ProfileAvatar;
