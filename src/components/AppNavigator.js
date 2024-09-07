import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AppNavigator() {
  return (
    <div>
      <AppBar sx={{ backgroundColor: '#30323D' }} position="fixed">
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography sx={{ cursor: 'pointer', color: '#CDD1C4' }}>
              Pokedex
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
