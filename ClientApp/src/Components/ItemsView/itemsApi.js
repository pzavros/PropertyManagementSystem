import axios from 'axios';

export const createItem = async (newItem) => {
    const response = await axios.post('/api/items', newItem);
    return response.data;
};

export const fetchItems = async () => {
    const response = await axios.get('/api/items');
    return response.data;
};

export const deleteItems = async (id) => {
    const response = await axios.delete(`/api/items/${id}`);
    return response.data;
};

export const updateItem = async (id, updatedItem) => {
    const response = await axios.put(`/api/items/${id}`, updatedItem);
    return response.data;
};
