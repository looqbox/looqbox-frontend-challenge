import React from 'react';
import { Box } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '55px',
        backgroundColor: '#f8f8f8',
        padding: '15px',
        width: '100%',
        boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)', 
        bottom: 0,
        left: 0,
        zIndex: 1000
      }}
    >
      <a href="https://looqbox.com" target="_blank" rel="noopener noreferrer">
        <img src={"/assets/logo.png"} alt="looqbox logo" style={{ height: '60px', cursor: 'pointer' }} />
      </a>
    </Box>
  );
};

export default Footer;
