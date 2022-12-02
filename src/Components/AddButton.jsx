import { Avatar, Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, IconButton, Modal, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Box, Stack } from '@mui/system';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ImageIcon from '@mui/icons-material/Image';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function AddButton() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <>
            <Tooltip title="Add" sx={{ position: 'fixed', bottom: 20, left: { xs: "calc(40%)", md: 30 } }}>
                <IconButton onClick={() => setOpen(true)}>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </IconButton>
            </Tooltip>

            <Dialog open={open} onClose={handleClose} fullWidth={true}>
                <DialogTitle>Create Post</DialogTitle>
                <Stack direction='column'>
                    
                    <Box sx={{display:'flex'}}>
                    <Avatar alt="Remy Sharp" src="https://picsum.photos/id/3/5000/3333" sx={{margin:'20px'}} />
               <Typography variant='h6' mt={3}>  
                Harry Potter
               </Typography>
                    </Box>
               
                    <DialogContent>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            placeholder="What's on your mind"
                            variant="filled"
                        />
                    </DialogContent>

                    <Stack direction='row' justifyContent='center'>
                        <ButtonGroup variant="filled">
                            <Button size="large"  startIcon={<AddReactionIcon></AddReactionIcon>} sx={{color:'#873e23'}}></Button>
                            <Button size="large" startIcon={<ImageIcon></ImageIcon>} sx={{color:'#154c79'}}></Button>  
                               <Button size='large' startIcon={<VideoCallIcon></VideoCallIcon>} sx={{color:'green'}}></Button>
                               <Button size="large" startIcon={<PersonAddIcon></PersonAddIcon>} sx={{color:'#44bcd8'}}></Button>
                        </ButtonGroup>
                    </Stack>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button  onClick={handleClose}>Post</Button>
                    </DialogActions>
                </Stack>
            </Dialog>

        </>
    )
}
