import { styled } from '@mui/material/styles';
import { Box} from '@mui/material';

export const FooterContainer = styled(Box)(({ theme }) => ({
    marginTop:'180px',
    display: 'flex',
    justifyContent: ' flex-start',
    width:'100%',
    height:'100%',
    padding: '0px 0px',
    background: '#003479'
    
  }));

export const FooterContent = styled(Box)(() => ({
    marginTop:'40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    maxWidth: 350,

    
    
}));



export const CopyrightContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: ' center',
    alignItems:'center',
  width:'100%',
  height:'100%',
  padding: '20px',
  background: '#003479'
  
}));

export const LogoContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: ' center',
  alignItems:'center',
  maxWidth: 420,

  
  
}));