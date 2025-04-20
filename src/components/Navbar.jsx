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
                  <Box sx={{ display: "flex", alignItems: "center", gap: 5 ,marginLeft: "1040px"}}>
                    <Bluebutton onClick={() => {
                 
                      window.scrollTo({
                        top: '0', 
                        behavior: 'smooth'
                      });
                    }}>Home</Bluebutton>



                    <Bluebutton
                    onClick={() => {
                      
                      window.scrollTo({
                        top: '820',
                        behavior: 'smooth'
                      });
                    }}
                    >Features</Bluebutton>

                  <Bluebutton 
                    onClick={() => {
                     
                      window.scrollTo({
                        top: '1200', 
                        behavior: 'smooth'
                      });
                    }}
                    >Contact us</Bluebutton>
                    
                    
                  </Box>


                {/* Create and Login */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 ,marginLeft: "60px"}}>

                  <Whitebutton>Sign-up</Whitebutton>
                  <Bluebutton>Login</Bluebutton>   
                </Box>
                

            </StyledToolbar>
        </AppBar>
    )
}


export default Navbar