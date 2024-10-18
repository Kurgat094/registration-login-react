import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Simulate logout
    navigate('/login');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Welcome to the Home Page</Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
};

export default HomePage;
