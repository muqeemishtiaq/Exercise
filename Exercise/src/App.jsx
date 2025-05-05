import React from 'react';
import { Route, Routes } from 'react-router';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExcerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
  <Box
    sx={{
      width: '100%',
      maxWidth: '1488px', // Max width for larger screens
      margin: 'auto',
    }}
  >
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;
