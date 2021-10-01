import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import drawerWidth from './constants';

const Header = () => {
  return (
    <AppBar
    position="fixed"
    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
  >
    <Toolbar>
      <Typography variant="h6" noWrap component="div">
        Permanent drawer
      </Typography>
    </Toolbar>
  </AppBar>
  );
};

export default Header;
