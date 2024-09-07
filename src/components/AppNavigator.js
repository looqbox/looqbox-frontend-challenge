import React from 'react';
import { AppBar, Toolbar, Typography, TextField, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AppNavigator({ onSearch }) {
  return (
    <AppBar sx={{ backgroundColor: '#30323D' }} position="fixed">
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 2 }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography sx={{ cursor: 'pointer', color: '#fafafa' }}>
              Pokedex
            </Typography>
          </Link>
        </Box>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search Pokémon"
          onChange={(e) => onSearch(e.target.value)}
          sx={{ backgroundColor: '#fff', borderRadius: 1, width: 300 }}
        />
      </Toolbar>
    </AppBar>
  );
}
