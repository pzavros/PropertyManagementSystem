import React, { useEffect, useState } from 'react';
import ItemForm from './ItemForm';

function ItemList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const response = await fetch('/api/items');
        const data = await response.json();
        setItems(data);
    };

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };

    return (
        <div>
            <h1>Items</h1>
            <ItemForm onAddItem={handleAddItem} />
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name}: {item.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
