import React, { useState } from 'react';
import { Item } from '../Models/Item';

function ItemForm({ onAddItem }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newItem = { name, description };
        const response = await fetch('/api/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
        });
        if (response.ok) {
            const item = await response.json();
            onAddItem(item);
            setName('');
            setDescription('');
        } else {
            const errorData = await response.json();
            console.error('Error:', errorData);
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
