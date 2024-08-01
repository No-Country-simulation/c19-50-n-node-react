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

export const createPost = async (data) => {
  try {
    const response = await axios.post('/posts', data);
    return { ok: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { ok: false, data: 'Hubo un error' };
  }
}
