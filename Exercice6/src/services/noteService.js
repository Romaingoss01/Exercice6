import axiosInstance from '../utils/axiosInstance';

const noteService = {
  getNotes: async () => {
    const res = await axiosInstance.get('/notes');
    return res.data;
  },

  getNoteById: async (id) => {
    const res = await axiosInstance.get(`/notes/${id}`);
    return res.data;
  },

  createNote: async (noteData) => {
    const res = await axiosInstance.post('/notes', noteData);
    return res.data;
  },

  updateNote: async (id, noteData) => {
    const res = await axiosInstance.put(`/notes/${id}`, noteData);
    return res.data;
  },

  deleteNote: async (id) => {
    await axiosInstance.delete(`/notes/${id}`);
  },
};

export default noteService;
