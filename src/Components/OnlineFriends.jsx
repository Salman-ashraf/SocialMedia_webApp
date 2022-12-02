import React from 'react'
import { Avatar, AvatarGroup} from '@mui/material'
export default function OnlineFriends() {
  return (
    
    
    <AvatarGroup total={12} sx={{cursor:'pointer'}} max={7}>
    <Avatar alt="Remy Sharp" src="https://picsum.photos/id/1/5000/3333" />
    <Avatar alt="Travis Howard" src="https://picsum.photos/id/11/2500/1667" />
    <Avatar alt="Agnes Walker" src="https://picsum.photos/id/3/5000/3333" />
    <Avatar alt="Trevor Henderson" src="https://picsum.photos/id/4/5000/3333" />

    <Avatar alt="Remy Sharp" src="https://picsum.photos/id/10/2500/1667" />
    <Avatar alt="Travis Howard" src="https://picsum.photos/id/2/5000/3333" />
    <Avatar alt="Agnes Walker" src="https://picsum.photos/id/18/2500/1667" />

    
  </AvatarGroup>
  )
}
