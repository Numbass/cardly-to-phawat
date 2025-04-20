import React from 'react';
import { Typography} from '@mui/material'
import { FooterContainer,FooterContent,CopyrightContainer,LogoContainer} from '../styling/Footerstyle';
import Stack from '@mui/material/Stack';
import CardlyLogo from './images/logo.png';
import IconButton from '@mui/material/IconButton';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FaceIcon from '@mui/icons-material/Face';
import Face2Icon from '@mui/icons-material/Face2';
import Face3Icon from '@mui/icons-material/Face3';
import Face4Icon from '@mui/icons-material/Face4';
import Face5Icon from '@mui/icons-material/Face5';
import Face6Icon from '@mui/icons-material/Face6';
import { Link } from '@mui/material';

const Footer = () => {
    return ( <div>

    <FooterContainer>

        <LogoContainer paddingLeft={20}>
        <img 
                    src={CardlyLogo} 
                    alt="Cardly Logo" 
                    style={{ height: '230px', width: '230px' }}
                />
        </LogoContainer>

        

        <FooterContent paddingLeft={20}>
        <Typography fontWeight= "bold" fontSize= "1.7rem" color='white'>Contact us</Typography>

        <Typography paddingTop={'20px'} color='white'>(+99) 887766554</Typography>
        <Typography color='white'>cardly@gmail.com</Typography>
        <Typography color='white'>reggin@gmail.com</Typography>
        
        </FooterContent>

        <FooterContent paddingLeft={37}>

        <Typography fontWeight= "bold" fontSize= "1.7rem" color='white'>Social</Typography>

                <Stack paddingTop={'20px'} direction="row" spacing={2}>

                    <Link href="https://www.facebook.com" target="_blank" rel="noopener">
                    <IconButton color="secondary">
                        <FacebookRoundedIcon fontSize='large'/>
                    </IconButton>
                    </Link>

                    <Link href="https://youtube.com" target="_blank" rel="noopener">
                    <IconButton color="secondary"> 
                        <YouTubeIcon fontSize='large'/>
                    </IconButton>
                    </Link>
                    
                    <Link href="https://instagram.com" target="_blank" rel="noopener">
                    <IconButton color="secondary">
                        <InstagramIcon fontSize='large' />
                    </IconButton>
                    </Link>

                    <Link href="https://x.com" target="_blank" rel="noopener">
                    <IconButton color="secondary">
                        <XIcon fontSize='large' />
                    </IconButton>
                    </Link>
                </Stack>

        </FooterContent>

        <FooterContent paddingLeft={22}>
                <Typography fontWeight= "bold" fontSize= "1.7rem" color='white'>Our Team</Typography>

                <Stack paddingTop={'20px'} direction="row">
                <Link href="https://x.com" target="_blank" rel="noopener">
                    <IconButton color="secondary">
                        <FaceIcon fontSize='large' />
                    </IconButton>
                    <IconButton color="secondary">
                        <Face2Icon fontSize='large' />
                    </IconButton>
                    <IconButton color="secondary">
                        <Face3Icon fontSize='large' />
                    </IconButton>
                    <IconButton color="secondary">
                        <Face4Icon fontSize='large' />
                    </IconButton>
                    <IconButton color="secondary">
                        <Face5Icon fontSize='large' />
                    </IconButton>
                    <IconButton color="secondary">
                        <Face6Icon fontSize='large' />
                    </IconButton>
                    </Link>
                </Stack>


        </FooterContent>

    </FooterContainer>
    
{/* copyright section */}

    <CopyrightContainer>
        <Typography color='white'>Copyright © 2025 | Reggin' Database Bros</Typography>
    </CopyrightContainer>

    </div>


    )


}

export default Footer