import React, { useState } from 'react';
import { Item } from '../../Models/Item';
import { createItem } from './itemApi';

function ItemForm({ onAddItem }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
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

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Description:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type="submit">Add Item</button>
        </form>
    );
}

export default ItemForm;
