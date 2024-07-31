import { axios } from '@/lib/axios';

export const register = async (userData) => {
  try {
    const response = await axios.post('/auth/register', {
      email: userData.email,
      password: userData.password,
      firstName: userData.name,
      lastName: userData.lastName,
      image: '',
    });

    console.log(response);

    return {
      ok: true,
      data: {
        email: response.data.email,
        name: response.data.firstName,
        lastName: response.data.lastName,
        role: response.data.roles[0],
        token: response.data.token,
      },
    };
  } catch (error) {
    console.log(error);
    return { ok: false, data: 'Hubo un error' };
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post('/auth/login', {
      email: userData.email,
      password: userData.password,
    });

    console.log(response);

    return {
      ok: true,
      data: {
        email: response.data.email,
        name: response.data.firstName,
        lastName: response.data.lastName,
        role: response.data.roles[0],
        token: response.data.token,
      },
    };
  } catch (error) {
    console.log(error);
    return { ok: false, data: 'Hubo un error' };
  }
};
