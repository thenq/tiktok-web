import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
  timeout: 5000,
});

// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const get = async (path, options = {}) => {
  try {
    const res = await instance.get(path, options);

    return res.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Data fetching cancelled');
    }
  }
};

export const post = async (path, body, options = {}) => {
  const res = await instance.post(path, body, options);

  return res.data;
};

export default instance;
