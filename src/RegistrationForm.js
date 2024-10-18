import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', age: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateAge = (age) => Number(age) >= 18 && Number(age) <= 50;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, age } = formData;

    if (!username || !email || !password || !age) {
      setError('All fields are required');
      return;
    }

    if (!validateAge(age)) {
      setError('Age must be between 18 and 50');
      return;
    }

    setSuccessMessage('Registration successful! Redirecting to login...');
    setError('');
    setTimeout(() => navigate('/login'), 2000);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Username" name="username" fullWidth margin="normal" value={formData.username} onChange={handleChange} />
        <TextField label="Email" name="email" fullWidth margin="normal" type="email" value={formData.email} onChange={handleChange} />
        <TextField label="Password" name="password" fullWidth margin="normal" type="password" value={formData.password} onChange={handleChange} />
        <TextField label="Age" name="age" fullWidth margin="normal" type="number" value={formData.age} onChange={handleChange} />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary">Register</Button>
      </form>
      <Snackbar open={!!successMessage} autoHideDuration={6000} message={successMessage} />
    </Container>
  );
};

export default RegistrationForm;
