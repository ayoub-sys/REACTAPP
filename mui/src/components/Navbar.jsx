import { Pets } from '@mui/icons-material'
import { AppBar, styled, Toolbar, Typography,Box, InputBase, Avatar} from '@mui/material'
import { width } from '@mui/system'
import { Badge } from '@mui/material'
import { Mail } from '@mui/icons-material'
import { Notifications } from '@mui/icons-material'
import React from 'react'


const Navbar = () => {
    const StyledToolbar=styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between"
    })

const Search=styled("div")(({theme})=>
({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:"10px",
    width:"40%"
}))


const Icons=styled(Box)(({theme})=>
({
    display:"flex",
    gap:"20px",
    alignItems:"center"
})

)
  return (
    <AppBar position="sticky">
        <StyledToolbar>
            <Typography variant='h6' sx={{ display:{xs:"none",sm:"block"} }}> LAMA DEV</Typography>
            <Pets sx={{ display:{xs:"block",sm:"none"} }} />
            <Search><InputBase placeholder='Enter your name...'/></Search>
            <Icons> 
            <Badge badgeContent={4} color="error">
                  <Mail  />
            </Badge>
            <Badge badgeContent={4} color="error">
                  <Notifications  />
            </Badge>
            <Avatar sx={{ width:30,height:30 }} src="../../public" />
             </Icons>
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar