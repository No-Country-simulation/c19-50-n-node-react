import { axios } from '@/lib/axios';

export const createFavorite = async ({ userId, postId }) => {
  try {
    const response = await axios.post('/favorites', { userId, postId });
    console.log({ response });
    // return { ok: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { ok: false, data: 'Hubo un error' };
  }
};

export const deleteFavorite = async ({ userId, postId }) => {
  try {
    const response = await axios.delete(
      `/favorites?userId=${userId}&postId=${postId}`
    );
    console.log({ response });
    // return { ok: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { ok: false, data: 'Hubo un error' };
  }
};
