// src/Pages/ItemsPage/ItemsPageFunctions.jsx
import { useState, useEffect } from 'react';
import { getItems } from '../../Components/ItemsView/ItemsFunctions';
import Translate from '../../Components/ReusableComponents/Translate';

export const useItemsPage = () => {
  const [items, setItems] = useState([]);
  const { t } = Translate();

  useEffect(() => {
    getItems(setItems);
  }, []);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return { items, t, handleAddItem };
};
