import { Box, Container, createTheme, ThemeProvider } from '@mui/material'
import { Stack } from '@mui/system'
import { useState } from 'react' 
import AddButton from './Components/AddButton'
import Feed from './Components/Feed'
import NavBar from './Components/NavBar'
import NavBar2 from './Components/NavBar2'
import RightBar from './Components/RightBar'
import SideBar from './Components/SideBar'


function App() {
  const [count, setCount] = useState(0)

  const [mode , setMode]=useState('dark');
  const darktheme=createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darktheme}>
<Box bgcolor={"background.default"} color={"text.primary"}>
    <NavBar2 mode={mode} setMode={setMode}/>
    <Stack
    direction='row'
    spacing={2}
    justifyContent='space-between'
>
  
   <SideBar></SideBar>
   <Feed></Feed>
   <RightBar></RightBar> 
   </Stack>
   <AddButton/> 
   </Box>
   </ThemeProvider> 
  )
}

export default App
