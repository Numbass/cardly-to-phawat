import { Button, InputBase, styled, Toolbar} from '@mui/material';

import {theme} from "../theme"

export const Bluebutton= styled(Button)({
    backgroundColor: theme.palette.primary.main,
    borderRadius: '11px',
    color: "white",
    margin: 3,
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "1.2rem",
    display:{ xs:'none', sm:'block'},
    "&:hover": {
      backgroundColor:  theme.palette.primary.light,
    },

    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    }
  });

export const Whitebutton= styled(Button)({
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '11px',
     fontWeight: "bold",
     fontSize: "1.2rem" ,
    color: "#1177fe",
    margin: 3,
    textTransform: "none",
    "&:hover": {
      backgroundColor:  theme.palette.secondary.light,
    },

    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    }
  });

export const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent: "flex-start",
    gap: "30px",
});


export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '11px',
    backgroundColor: "white",
    padding:'0 12px' ,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '20%',
    },
  }));
  
export  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 0.5),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  }));

export  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      component:"img",
      [theme.breakpoints.up('md')]: {
        width: '35ch',
      },
    },
  }));


