// ItemsList.jsx
import React from 'react';

function ItemsList({ items }) {
    return (
        <div>
            <h1>Items</h1>
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

export default ItemsList;
