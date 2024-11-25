import axios from "axios";

const apiURL = 'http://localhost:8000/api';

export const getTasks = async () => {
    const response = await axios.get(`${apiURL}/getTasks`);
    return response.data;
};

export const createTask = async (task) => {
    const response = await axios.post(`${apiURL}/createTask`, task);
    return response.data;
};

export const deleteTask = async (id) => {
    const response = await axios.delete(`${apiURL}/deleteTask/${id}`);
    return response.data;
};

export const toggleTaskCompletion = async (id ,newStatus) => {
    const response = await axios.put(`${apiURL}/updateTask/${id}`,
    {Completed : newStatus,});
    return response.data;
};


