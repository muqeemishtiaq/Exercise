import React from 'react';
import { Link } from 'react-router';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', hover: { color: '#FF2625' }}}>Home</Link>
      <Link to ="exercises" style={{ textDecoration: 'none', color: '#3A1212', hover: { color: '#FF2625' } }}>Exercises</Link>
    </Stack>
  </Stack>
);

export default Navbar;