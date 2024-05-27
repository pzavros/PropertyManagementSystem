// Pages/ItemsPage.jsx
import React, { useState, useEffect } from 'react';
import {Box, Typography} from '@mui/material';
import ItemsList from '../Components/ItemsView/ItemsList';
import ItemsForm from '../Components/ItemsView/ItemsForm';
import { getItems } from '../Components/ItemsView/ItemsFunctions';

function ItemsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems(setItems);
  }, []);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant = 'h1'>Items Management</Typography>
      <ItemsForm onAddItem={handleAddItem} />
      <ItemsList items={items} />
    </Box>
  );
}

export default ItemsPage;
