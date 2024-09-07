import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

export default function AppNavigator() {
  return (
    <div>
    {/* Posso remover o variant */}
      <AppBar sx={{ backgroundColor: 'black' }} position="fixed"  variant='h6'>
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography sx={{ cursor: 'pointer', color: 'white' }}>
              Pokedex
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
