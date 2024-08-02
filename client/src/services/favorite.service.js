import { axios } from '@/lib/axios';

export const fetchFavorites = async (userId) => {
  try {
    const response = await axios.get(`/favorites/by-user/${userId}`);
    return { ok: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { ok: false, data: 'Hubo un error' };
  }
};

export const createFavorite = async ({ userId, postId }) => {
  try {
    await axios.post('/favorites', { userId, postId });
  } catch (error) {
    console.log(error);
    return { ok: false, data: 'Hubo un error' };
  }
};

export const deleteFavorite = async ({ userId, postId }) => {
  try {
    await axios.delete(`/favorites?userId=${userId}&postId=${postId}`);
  } catch (error) {
    console.log(error);
    return { ok: false, data: 'Hubo un error' };
  }
};

export const fetchFavoritesByPostId = async (id) => {
  try {
    const response = await axios.get(`/favorites/by-post/${id}`);
    return { ok: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { ok: false, data: 'Hubo un error' };
  }
};
