import {Box} from "@mui/material";
import Navbar from "./components/Navbar";
import Page from "./components/Page";
import Footer from './components/Footer'
import Login from './components/Login'


function App() {


  return (
    <Box>
      <Navbar></Navbar>
      <Page></Page>
      <Footer></Footer>
      {/* <Login></Login> */}
    </Box>
  );
}

export default App;
