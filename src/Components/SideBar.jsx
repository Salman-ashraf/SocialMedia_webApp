import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NewListItem from './subcomponents/NewListItem';
import DarkModeIcon from '@mui/icons-material/DarkMode';
export default function SideBar() {
    return (
        <Box
       
            flex={1}
            p={2}
            sx={{ display: { xs: 'none', sm: 'block' } }}
   
        >

<Box position='fixed'>

            <List>
                <NewListItem primary='Homepage' OptionIcon={<HomeIcon />}/>
                <NewListItem primary='Pages' OptionIcon={<MenuBookIcon />}/>
                <NewListItem primary='Groups' OptionIcon={<Diversity1Icon />}/>
                <NewListItem primary='MarketPlace' OptionIcon={<StorefrontIcon />}/>
                <NewListItem primary='Friends' OptionIcon={<Diversity3Icon />}/>
                <NewListItem primary='Settings' OptionIcon={<SettingsIcon />}/>
                <NewListItem primary='DarkMode' OptionIcon={<DarkModeIcon />}/>
                
                
            </List>

            </Box>
           
        </Box>
    )
}
