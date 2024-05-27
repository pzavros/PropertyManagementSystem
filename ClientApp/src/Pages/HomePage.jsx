import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/items');
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">Home Page</Typography>
      <Typography paragraph>
        Welcome to the home page.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleNavigate}>
        Go to Items Page
      </Button>
    </Box>
  );
}

export default HomePage;
