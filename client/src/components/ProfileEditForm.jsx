import { useState } from 'react';

import { useUserStore } from '@/store/user';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import ProfileAvatar from './ProfileAvatar';
import LoadingButton from './LoadingButton';

import { editProfileSchema } from '@/lib/schemas/editProfileSchema';

import { cn } from '@/lib/utils';

const ProfileEditForm = () => {
  const { user, updateUser } = useUserStore((state) => state);

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState();

  const form = useForm({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      name: user.name || '',
      lastName: user.lastName || '',
      file: undefined,
    },
  });

  const fileRef = form.register('file');

  const getImageData = (e) => {
    const selectedFile = e.target?.files?.[0];

    let files;
    let displayUrl;

    if (selectedFile) {
      const dataTransfer = new DataTransfer();

      dataTransfer.items.add(selectedFile);

      files = dataTransfer.files;
      displayUrl = URL.createObjectURL(selectedFile);
    }

    return { files, displayUrl };
  };

  const onSubmit = async (values) => {
    setIsLoading(true);

    let formData = new FormData();

    formData.append('id', user.id);
    formData.append('name', values.name);
    formData.append('lastName', values.lastName);

    if (values?.file?.[0]) {
      formData.append('file', values.file[0]);
    }

    updateUser({ name: values.name, lastName: values.lastName });
    setIsLoading(false);
    setIsEditing(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 mb-12">
        <div className="flex gap-10 items-center justify-between">
          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <label
                    htmlFor={`${isEditing && 'upload'}`}
                    className={cn(isEditing && 'cursor-pointer')}
                  >
                    <ProfileAvatar
                      previewImage={preview}
                      className="w-28 h-28"
                    />
                    <Input
                      type="file"
                      multiple={false}
                      accept="image/jpeg, image/jpeg, image/png, image/webp"
                      className="hidden"
                      id="upload"
                      {...fileRef}
                      value={undefined}
                      onChange={(e) => {
                        const { files, displayUrl } = getImageData(e);
                        setPreview(displayUrl);
                        return field.onChange(files);
                      }}
                    />
                  </label>
                </FormControl>
                <FormMessage className="absolute p-0 m-0" />
              </FormItem>
            )}
          />
          {!isEditing && (
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
          )}
          {isEditing && (
            <div className="flex gap-1">
              <LoadingButton type="submit" isLoading={isLoading}>
                Guardar cambios
              </LoadingButton>
            </div>
          )}
        </div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre:</FormLabel>
              <FormControl>
                <Input placeholder="nombre" {...field} disabled={!isEditing} />
              </FormControl>
              <FormMessage className="absolute p-0 m-0" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellido:</FormLabel>
              <FormControl>
                <Input
                  placeholder="apellido"
                  {...field}
                  disabled={!isEditing}
                />
              </FormControl>
              <FormMessage className="absolute p-0 m-0" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default ProfileEditForm;
