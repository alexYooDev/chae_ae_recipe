import axios from 'axios';

export const testRequest = () => {
  return axios.get('http://localhost:5000/check');
};