import React, { useState } from 'react';
import Translate from '../ReusableComponents/Translate';
import { Typography, List, ListItem, ListItemText, Box, IconButton, TextField, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { DeleteItem, UpdateItem } from './ItemsFunctions';

function ItemsList({ items, setItems }) {
    const { t } = Translate();
    const [editItemId, setEditItemId] = useState(null);
    const [editedItem, setEditedItem] = useState({ id: null, name: '', description: '' });

    const handleDelete = async (id) => {
        await DeleteItem(id, setItems);
    };

    const handleEditClick = (item) => {
        setEditItemId(item.id);
        setEditedItem({ id: item.id, name: item.name, description: item.description });
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditedItem((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = async (id) => {
        await UpdateItem(id, editedItem, setItems);
        setEditItemId(null);
        setEditedItem({ id: null, name: '', description: '' });
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                {t('b.items')}
            </Typography>
            <List>
                {items.map((item) => (
                    <ListItem key={item.id} divider>
                        {editItemId === item.id ? (
                            <>
                                <TextField
                                    name="name"
                                    label={t('b.name')}
                                    value={editedItem.name}
                                    onChange={handleEditChange}
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextField
                                    name="description"
                                    label={t('b.description')}
                                    value={editedItem.description}
                                    onChange={handleEditChange}
                                    margin="dense"
                                    variant="outlined"
                                    fullWidth
                                />
                                <IconButton edge="end" aria-label="save" onClick={() => handleSave(item.id)}>
                                    <SaveIcon />
                                </IconButton>
                            </>
                        ) : (
                            <>
                                <ListItemText
                                    primary={item.name}
                                    secondary={item.description}
                                />
                                <IconButton edge="end" aria-label="edit" onClick={() => handleEditClick(item)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </>
                        )}
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default ItemsList;
