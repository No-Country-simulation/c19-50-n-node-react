import { axios } from '@/lib/axios';

export const createFavorite = async ({ userId, postId }) => {
  try {
    await axios.post('/favorites', { userId, postId });
    // return { ok: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { ok: false, data: 'Hubo un error' };
  }
};

export const deleteFavorite = async ({ userId, postId }) => {
  try {
    await axios.delete('/favorites', { userId, postId });
    // return { ok: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { ok: false, data: 'Hubo un error' };
  }
};
