// src/Pages/ItemsPage/ItemsPage.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import ItemsList from '../../Components/ItemsView/ItemsList';
import ItemsForm from '../../Components/ItemsView/ItemsForm';
import LanguageSelector from '../../Components/ItemsView/ItemsLanguageButton';
import { useItemsPage } from './ItemsPageFunctions';

function ItemsPage() {
  const { items, t, handleAddItem } = useItemsPage();

  return (
    <Box className="m-4">
      <LanguageSelector />
      <ItemsForm onAddItem={handleAddItem} />
      <ItemsList items={items} />
    </Box>
  );
}

export default ItemsPage;
