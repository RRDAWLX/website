import axios from 'axios';

axios.interceptors.response.use(res => {
  if (!res.data.status || res.data.status !== 1) {
    console.log('response interceptor 1 invoked');
  }
  let json = {
    status: 0,
    data: {}
  };

  if (res && res.data) {
    res.data.origin = res;
    return res.data;
  } else {
    return {
      status: 0,
      origin: res
    };
  }
}, error => {
  console.log('response interceptor 2 invoked');

  return {
    status: 0,
    error
  };
});

export default axios;