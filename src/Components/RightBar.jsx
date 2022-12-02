import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'
import React from 'react'
import ConversationsList from './subcomponents/ConversationsList'
import PhotosList from '../PhotosList'
import OnlineFriends from './OnlineFriends'

export default function RightBar() {
  return (
    <Box 
     
    sx={{display:{xs:'none',sm:'block'}}}
    flex={1} 
    p={2}>

      <Box position='fixed' width={280}>
       <Typography variant='h6' fontWeight={100} mb={2} mt={2}>
       Online Firends
       </Typography>
    <OnlineFriends/>


    <Typography variant='h6' fontWeight={100} mb={2} mt={2}>
      Latest Photos
       </Typography>
     <PhotosList/>
 
     <Typography variant='h6' fontWeight={100} mb={2} mt={2}>
      Latest Conversation
       </Typography>

<ConversationsList/>
        </Box>
        </Box>
  )
}
