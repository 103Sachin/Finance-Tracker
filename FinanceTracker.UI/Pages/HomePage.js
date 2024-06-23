import React from "react";
import { Container, Typography, Box } from '@mui/material';

const HomePage = () => {
    return (
        <Container maxWidth="md">
           <Box mt={5} textAlign="center">
              <Typography variant="h2" component="h1" gutterBottom>
                Welcome to the Personal Finance Tracker
              </Typography>
              <Typography variant="h5" component="p">
                Manage your expenses and income easily.
              </Typography>
           </Box>
        </Container>
    );
};

export default HomePage;