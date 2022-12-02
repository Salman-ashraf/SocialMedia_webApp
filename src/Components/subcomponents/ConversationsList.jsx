import { List } from '@mui/material'
import React from 'react'
import ConversationItem from '../../assets/ConversationItem'


export default function ConversationsList() {
  return (
   

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
   <ConversationItem/>
   <ConversationItem/>
   <ConversationItem/>
    </List>
  )
}
