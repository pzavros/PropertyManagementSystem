// ItemsList.jsx
import React from 'react';
import Translate from '../ReusableComponents/Translate';

function ItemsList({ items }) {
    const { t } = Translate();
    return (
        <div>
            <h1> {t('b.items')}</h1>
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
