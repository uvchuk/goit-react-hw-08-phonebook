import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: 'fit-content',
        gap: '100px',
        mt: '10%',
      }}
    >
      <Typography variant="h4" component="h2">
        Welcome to your's PhoneBook!
      </Typography>
      <Button variant="contained" component={Link} to="/contacts">
        Open PhoneBook!
      </Button>{' '}
    </Box>
  );
};

export default HomePage;
