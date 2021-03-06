import { create } from 'apisauce';

const api = create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000'
      : 'https://backend-sysc4d.herokuapp.com',
});

export default api;
