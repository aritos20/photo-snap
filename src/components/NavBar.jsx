import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function NavBar({link, button}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{background: '#0D0D0D'}} >
        <Toolbar>
          <Typography variant="h6" component="div" style={{textAlign: 'left'}} sx={{ flexGrow: 1 }}>
            PhotoSnap
          </Typography>
          <Link to={link} style={{textDecoration: 'none'}}>
            <Button style={{background: '#FF8E3C', color: '#0D0D0D'}} variant='contained'>{button}</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Offset />
    </Box>
  );
}