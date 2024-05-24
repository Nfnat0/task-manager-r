import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const createTask = async (task) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/tasks`, task);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export const getTasks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tasks`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};
