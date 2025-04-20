import { styled } from '@mui/material/styles';
import { Box,Button,Card} from '@mui/material';
import {theme} from "../theme"
import Divider, { dividerClasses } from '@mui/material/Divider';



export const BannerContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    width:'100%',
    height:'100%',
    
  }));

export const BannerContent = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: ' center',
    alignItems:'center',
    maxWidth: 420,
    padding: '40px 30px',
    
    
}));



export const GetStartbutton= styled(Button)({
  backgroundColor: theme.palette.primary.main,
  borderRadius: '10px',
  color: "white",
  margin: 5,
  textTransform: "none",
  padding: '8px 20px',
  fontSize: '1.6rem',
  fontWeight: 'bold',
  marginTop:'16px',
  "&:hover": {
    backgroundColor:  theme.palette.primary.light,
  },

  "&:disabled": {
    backgroundColor: "gray",
    color: "white",
  }
});

export const VerticalDividers= styled(Divider)({
        display: 'flex',
        marginTop:'93px',
        marginLeft: '80px',
        alignItems: 'center',
        border: '3px solid',
        borderColor: 'primary',
        borderRadius: 1,
        bgcolor: 'background.paper',
        color: theme.palette.primary.main,
        height: '500px',
        '& svg': {
          m: 1,
        },
        [`& .${dividerClasses.root}`]: {
          mx: 0.5,
        },
});

export const GrowingCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: 23,
  borderRadius: 30,
  height:"410px",
  width:'320px',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',  // Increases size by 5% on hover
    boxShadow: theme.shadows[10]  // Optional: adds more shadow on hover
  }
}));

export const CardHeader = styled(Box)({
  background: 'none', // Ensures no background
  color: 'black',
  padding: '18px 20px',
  fontWeight: 'bold',
  fontSize: '27px',
  textAlign: 'center',



  
});