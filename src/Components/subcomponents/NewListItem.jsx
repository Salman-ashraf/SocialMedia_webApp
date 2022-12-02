import { Home } from '@mui/icons-material';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import Icon from "@mui/material/Icon";


export default function NewListItem(props) {
 
  return (
    <ListItem disablePadding>
    <ListItemButton>
        <ListItemIcon>
        <Icon>{props.OptionIcon}</Icon>
        </ListItemIcon>
        <ListItemText primary={props.primary} />
    </ListItemButton>
</ListItem>

  )
}
