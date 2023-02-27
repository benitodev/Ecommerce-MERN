import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Left from './Left';
import Center from './Center';
import Right from './Right';
import { NavBarStyle, ToolbarStyle } from './styles';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={NavBarStyle}>
        <Toolbar sx={ToolbarStyle}>
          <Left />
          <Center />
          <Right />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
