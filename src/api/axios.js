import axios from 'axios';

axios.interceptors.response.use(res => {
  if (!res.data.status || res.data.status !== 1) {
    conosle.log('response interceptor 1 invoked');
  }
  return res;
}, error => {
  conosle.log('response interceptor 2 invoked');

  return {
    status: 0,
    error
  };
});

export default axios;