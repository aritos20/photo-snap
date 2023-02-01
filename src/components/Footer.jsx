import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box >
    <AppBar position="static" style={{background: '#0D0D0D'}} >
      <Toolbar>
        <Typography variant="h6" component="div" style={{textAlign: 'left'}}>
          Developed an designed by Aristidis Gianicopulos
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Footer;