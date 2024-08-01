import { axios } from '@/lib/axios';

export const fetchPosts = async () => {
  try {
    const response = await axios.get('/posts');
    return { ok: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { ok: false, data: 'Hubo un error' };
  }
};
