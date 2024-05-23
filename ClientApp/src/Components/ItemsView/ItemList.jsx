import React, { useEffect, useState } from 'react';
import ItemForm from './ItemForm';
import { fetchItems } from './itemApi';

function ItemList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const itemsData = await fetchItems();
            setItems(itemsData);
        };

        getItems();
    }, []);

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
