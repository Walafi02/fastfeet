import axios from 'axios';
import { useDispatch } from 'react-redux';
import { singOut } from '~/store/modules/auth/actions';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      const dispatch = useDispatch();
      dispatch(singOut());
      // window.location('/');
    }
    return Promise.reject(error);
  }
);

export default api;
