import { AppBar, Box } from '@mui/material';
import React from 'react';
import CardlyLogo from './images/logo.png'

import { Bluebutton,Whitebutton,StyledToolbar} from '../styling/Navstyle';


const Navbar = () => {
    return (
        <AppBar position="sticky">
            <StyledToolbar>
    
                <img 
                    src={CardlyLogo} 
                    alt="Cardly Logo" 
                    style={{ height: '100px', width: '100px' }}
                />


                {/* Home Subject About */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 5 ,paddingLeft: "1040px" }}>
                    <Whitebutton onClick={() => {
                 
                      window.scrollTo({
                        top: '0', 
                        behavior: 'smooth'
                      });
                    }}>Home</Whitebutton>



                    <Whitebutton
                    onClick={() => {
                      
                      window.scrollTo({
                        top: '820',
                        behavior: 'smooth'
                      });
                    }}
                    >Features</Whitebutton>

                  <Whitebutton 
                    onClick={() => {
                     
                      window.scrollTo({
                        top: '1200', 
                        behavior: 'smooth'
                      });
                    }}
                    >Contact us</Whitebutton>
                    
                    
                  </Box>


                {/* Create and Login */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 ,paddingLeft: "60px"}}>

                  <Bluebutton>Sign up</Bluebutton>
                  <Whitebutton>Login</Whitebutton>   
                </Box>
                

            </StyledToolbar>
        </AppBar>
    )
}


export default Navbar