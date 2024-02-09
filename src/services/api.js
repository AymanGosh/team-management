// src/services/api.js
import axios from 'axios';
import { dummyTasks, dummyEmployees, dummyDepartments } from './dummyData'; // Import dummy data

const API_BASE_URL = 'http://your-api-base-url';

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`, // Adjust the path according to your API structure
});

export const getAllDepartments = () =>
  api.get('/departments').catch(() => {
    console.error('Error fetching departments. Falling back to dummy data.');
    return Promise.resolve({ data: dummyDepartments });
  });

export const getDepartmentById = (id) => api.get(`/departments/${id}`);

export const saveDepartment = (department) => api.post('/departments', department);

export const updateDepartment = (department) =>
  api.put(`/departments/${department.id}`, department);

export const deleteDepartment = (id) => api.delete(`/departments/${id}`);

export const getAllEmployees = () =>
  api.get('/employees').catch(() => {
    console.error('Error fetching employees. Falling back to dummy data.');
    return Promise.resolve({ data: dummyEmployees });
  });

// ... (continue with other employee-related API requests)

export const getAllTasks = () =>
  api.get('/tasks').catch(() => {
    console.error('Error fetching tasks. Falling back to dummy data.');
    return Promise.resolve({ data: dummyTasks });
  });

// ... (continue with other task-related API requests)
export const getEmployeeById = (id) => api.get(`/employees/${id}`);

export const getTaskById = async (id) => {
    try {
      // Try to fetch task from the server
      const response = await api.get(`/tasks/${id}`);
      return response.data;
    } catch (error) {
      // If an error occurs (e.g., server not available), use dummy data
      console.error('Error fetching task from server:', error);
  
      // Find the task in dummy data with the matching id
      const dummyTask = dummyTasks.find((task) => task.id === parseInt(id, 10));
  
      if (dummyTask) {
        return dummyTask;
      } else {
        console.error('Dummy task not found for id:', id);
        return null;
      }
    }
  };

  export const deleteTask = async (id) => {
    try {
      // Try to delete task from the server
      const response = await api.delete(`/tasks/${id}`);
      console.log('Task deleted successfully from the server:', response.data);
    } catch (error) {
      // If the server is not available, delete the task from dummy-data
      console.error('Error deleting task from the server:', error);
  
      const updatedDummyTasks = dummyTasks.filter((task) => task.id !== parseInt(id, 10));
      // Replace the dummyTasks array with the updatedDummyTasks
      dummyTasks.length = 0;
      Array.prototype.push.apply(dummyTasks, updatedDummyTasks);
  
      console.log('Task deleted from dummy data:', id);
    }
  };