// ItemsFunctions.jsx
import { Item } from '../../Models/Item';
import { createItem, fetchItems, deleteItems, updateItem } from './itemsApi';

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

// Function to delete an item
export const DeleteItem = async (id, setItems) => {
    try {
        await deleteItems(id);
        await getItems(setItems); // Make sure to await here
    } catch (error) {
        console.error('Error:', error);
    }
};

// Function to update an item
export const UpdateItem = async (id, updatedItem, setItems) => {
    try {
        await updateItem(id, updatedItem);
        await getItems(setItems);
    } catch (error) {
        console.error('Error:', error);
    }
};
