// ItemForm.jsx
import React, { useState } from 'react';
import { handleSubmit } from './ItemsFunctions';

function ItemsForm({ onAddItem }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    return (
        <form onSubmit={(e) => handleSubmit(e, name, description, onAddItem, setName, setDescription)}>
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

export default ItemsForm;
