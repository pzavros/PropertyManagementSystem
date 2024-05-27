// ItemsFunctions.jsx
import { Item } from '../../Models/Item'; // Adjusted the import path to match the directory structure
import { createItem, fetchItems } from './itemsApi';

// Function to handle form submission
export const handleSubmit = async (e, name, description, onAddItem, setName, setDescription) => {
    e.preventDefault();
    const newItem = new Item(name, description);
    try {
        const addedItem = await createItem(newItem);
        onAddItem(addedItem);
        setName('');
        setDescription('');
    } catch (error) {
        console.error('Error:', error);
    }
};

// Function to fetch items
export const getItems = async (setItems) => {
    try {
        const itemsData = await fetchItems();
        setItems(itemsData);
    } catch (error) {
        console.error('Error:', error);
    }
};
