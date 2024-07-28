import * as bcrypt from 'bcrypt';
import { validRoles } from 'src/auth/constants/valid-roles.constant';
import { CategoryName } from 'src/categories/interfaces/categories.interface';

interface SeedUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  image?: string;
  roles: validRoles[];
}

interface SeedCategories {
  id: string;
  name: CategoryName;
}

interface SeedPosts {
  userId: string;
  category: string;
  title: string;
  address: string;
  content: string;
  price: number;
  date: Date;
  latitude: number;
  longitude: number;
  image: string;
  created_at: Date;
}

interface SeedData {
  users: SeedUser[];
  // posts: SeedPosts[];
  categories: SeedCategories[];
}

const password = 'adminHolder01';
const password2 = 'superHolder01';
const password3 = 'userRandom01';

export const initialData: SeedData = {
  users: [
    {
      id: '9c2d72af-4c58-4cfa-a8ed-2f897efba0d9',
      email: 'admin@holder.com',
      password: bcrypt.hashSync(password, 10),
      firstName: 'Alex',
      lastName: 'Bazan',
      image: 'https://avatars.githubusercontent.com/u/171944709?s=200&v=4',
      roles: ['admin'],
    },
    {
      id: '9c2646ec-2dde-45d2-91bb-9f672526eb64',
      email: 'superadmin@holder.com',
      password: bcrypt.hashSync(password2, 10),
      firstName: 'Pablo',
      lastName: 'Rosales',
      image: 'https://avatars.githubusercontent.com/u/171944709?s=200&v=4',
      roles: ['super-user'],
    },
    {
      id: 'bd0ba182-945e-4628-8d6c-baf32b1436f7',
      email: 'testing01@correo.com',
      password: bcrypt.hashSync(password3, 10),
      firstName: 'Marco',
      lastName: 'Rossetti',
      image: 'https://avatars.githubusercontent.com/u/171944709?s=200&v=4',
      roles: ['user'],
    },
  ],
  categories: [
    {
      id: '16730ee0-c907-40c0-ba2f-1d2d7c9a5cd0',
      name: CategoryName.CICLISMO,
    },
    {
      id: '4b378f72-d9c6-40a0-8e9d-fb2e7c8f1e9d',
      name: CategoryName.FESTIVALES,
    },
    {
      id: '16e86c2d-8077-44a7-9b45-4c7b765e2b0a',
      name: CategoryName.SENDEROS,
    },
    {
      id: 'a5c9b108-fc2b-4a7b-9f3e-b0e741f9d30e',
      name: CategoryName.TREKKING,
    },
    {
      id: '7a8c1f30-6a42-4a83-8e97-2f8c7f7f0e4a',
      name: CategoryName.WORKSHOPS,
    },
  ],
  //FIXME:
  // posts: [
  //   {
  //     userId: '9c2d72af-4c58-4cfa-a8ed-2f897efba0d9',
  //     category: 'a5c9b108-fc2b-4a7b-9f3e-b0e741f9d30e',
  //     title: 'Excursión a la Montaña',
  //     address: '123 Calle Falsa, Ciudad, País',
  //     content:
  //       'Únete a nuestra emocionante excursión a la montaña. Disfruta de vistas panorámicas y una experiencia inolvidable.',
  //     price: 150.0,
  //     date: new Date(),
  //     latitude: 45.4215, // Latitud en el rango -90 a 90
  //     longitude: -75.6972, // Longitud en el rango -180 a 180
  //     image: 'https://example.com/images/excursion-montana.jpg',
  //     created_at: new Date(),
  //   },
  // ],
};
