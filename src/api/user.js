import axios from './axios';

export default {
  info() {
    return axios.get('/api/user/info');
  }
};