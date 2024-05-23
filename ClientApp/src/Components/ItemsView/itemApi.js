import axios from 'axios';

export const createItem = async (newItem) => {
    const response = await axios.post('/api/items', newItem);
    return response.data;
};

export const fetchItems = async () => {
    const response = await axios.get('/api/items');
    return response.data;
};
