import axiosInstance from '../utils/axiosInstance';

const authService = {
  login: async (email, password) => {
    const res = await axiosInstance.post('/auth/login', { email, password });
    localStorage.setItem('token', res.data.token);
    return res.data;
  },

  register: async (email, password) => {
    const res = await axiosInstance.post('/auth/register', { email, password });
    localStorage.setItem('token', res.data.token);
    return res.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  getToken: () => {
    return localStorage.getItem('token');
  },
};

export default authService;
