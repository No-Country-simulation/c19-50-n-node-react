import { axios } from '@/lib/axios';

export const fetchQuestionsByPostId = async (postId) => {
  try {
    const response = await axios.get(`/questions/by-post/${postId}`);
    return { ok: true, data: response.data };
  } catch (error) {
    console.log(error);
    return { ok: false, data: 'Hubo un error' };
  }
};
