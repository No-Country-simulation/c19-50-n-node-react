import Axios from 'axios';
import { useUserStore } from '@/store/user';

const axios = Axios.create({
  baseURL: import.meta.env.API_BASE_URL,
  withCredentials: true,
});

axios.interceptors.request.use((config) => {
  const token = useUserStore.getState().token;
  config.headers = {
    Authorization: `Bearer ${token}`,
  };
});

export { axios };
