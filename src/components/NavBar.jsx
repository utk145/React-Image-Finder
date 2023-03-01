import React from 'react';
import {AppBar,Toolbar,Typography} from '@mui/material';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';


const NavBar = () => {
  return (
    <AppBar sx={{backgroundColor:"#101010"}} position="static">
        <Toolbar style={{ justifyContent: 'center' }}>
            <ImageSearchIcon/>
            <Typography variant="h5" paddingLeft={2}>UTKs Image Finder App</Typography>
        </Toolbar>
    </AppBar>
  )


}

export default NavBar