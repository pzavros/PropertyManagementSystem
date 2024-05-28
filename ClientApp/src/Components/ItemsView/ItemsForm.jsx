import React, { useState } from 'react';
import { handleSubmit } from './ItemsFunctions';
import Translate from '../ReusableComponents/Translate';
import { Box, Button, TextField, Typography } from '@mui/material';

function ItemsForm({ onAddItem }) {
  const { t } = Translate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  return (
    <Box
      component="form"
      onSubmit={(e) => handleSubmit(e, name, description, onAddItem, setName, setDescription)}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <Typography variant="h3" fontWeight="bold" mb={2}>
        {t('b.itemsManagement')}
      </Typography>
      <TextField
        label={t('b.name')}
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />
      <TextField
        label={t('b.description')}
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        {t('b.addItem')}
      </Button>
    </Box>
  );
}

export default ItemsForm;
