import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
 import { ThemeContext } from "../routes/ThemeContext";
import { useContext } from "react";


import ListItemText from '@mui/material/ListItemText';





import { GiHamburgerMenu } from "react-icons/gi";

import style from "./sidebar.module.css";



export default function TemporaryDrawer() {

  const [open, setOpen] = React.useState(false);

  const{Light}=useContext(ThemeContext);
 


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 ,height:1000,}} role="presentation" onClick={toggleDrawer(false)}  className={Light?style.bar_container:style.bar_container_dark} >
      <h3 style={{margin:'10px 30px 40px 70px'}}>FILTERS</h3>
     <h6 style={{marginLeft:'10px'}}>CATEGORIES</h6>

      <List>
        {['Dresses', 'Shoes', 'Accesories', 'Daily use items'].map((text, index) => (
          <ListItem  key={text} disablePadding>
            <ListItemButton>
             <input type="checkbox" />
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
       <h6 style={{margin:'10px'}}>PRICE RANGE</h6>
      <List>
        {['below ₹500', '₹500 - ₹1000', 'above ₹1000'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
             <input type="checkbox" />
             
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <span className={Light?style.bar_icon:'light'} >
    <Button onClick={toggleDrawer(true)}><GiHamburgerMenu color='black' /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </span>
  );
}
