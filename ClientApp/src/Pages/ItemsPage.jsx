import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import ItemsList from '../Components/ItemsView/ItemsList';
import ItemsForm from '../Components/ItemsView/ItemsForm';
import { getItems } from '../Components/ItemsView/ItemsFunctions';
import LanguageSelector from '../Components/ItemsView/ItemsLanguageButton';
import Translate from '../Components/ReusableComponents/Translate';

function ItemsPage() {
  const [items, setItems] = useState([]);
  const { t } = Translate();

  useEffect(() => {
    getItems(setItems);
  }, []);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <LanguageSelector />
      <ItemsForm onAddItem={handleAddItem} />
      <ItemsList items={items} />
    </Box>
  );
}

export default ItemsPage;
