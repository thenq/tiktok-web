import axios from 'axios';
console.log(process.env);
const apiRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
});

// apiRequest.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const get = async (path, options = {}) => {
  try {
    const res = await apiRequest.get(path, options);

    return res.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Data fetching cancelled');
    }
  }
};

export const post = async (path, body, options = {}) => {
  const res = await apiRequest.post(path, body, options);

  return res.data;
};

export default apiRequest;
