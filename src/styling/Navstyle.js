import { Button, styled, Toolbar} from '@mui/material';

import {theme} from "../theme"

export const Bluebutton= styled(Button)({
    backgroundColor: theme.palette.primary.main,
    borderRadius: '5px',
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
    borderRadius: '7px',
     fontWeight: "bold",
     fontSize: "1.2rem" ,
    color: theme.palette.primary.main,
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
    backgroundColor:'white'
});



