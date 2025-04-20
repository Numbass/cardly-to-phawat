import { Typography} from '@mui/material'
import CardActionArea from '@mui/material/CardActionArea';
import React from 'react';
import { BannerContainer, BannerContent, GetStartbutton, VerticalDividers, GrowingCard,CardHeader} from '../styling/Pagestyle';
import flashcardimg from './images/Flashcard.png'
import exploreimg from './images/Explore.png'
import practiceimg from './images/Practice test.png'
import studyimg from './images/Study.png'
import LockOpenIcon from '@mui/icons-material/LockOpen';






const LandingPage = () => {

    return (
        <div style={{ backgroundColor: '#e3f9ff' }}>
        <Typography fontSize={'27px'} textAlign="center" paddingTop={10}  >
            Introducing platform for sigma </Typography>
        <BannerContainer paddingTop={2}>

            <BannerContent paddingRight={'50px'} >
               <Typography fontSize={'130px'} textAlign="center" fontWeight={'bold'} color= 'primary'>UNLOCK</Typography>
               <Typography fontSize={'130px'} textAlign="center" fontWeight= {"bold"} color='#1e3a8a'>YOUR</Typography>
               <Typography fontSize={'130px'} textAlign="center" fontWeight= {"bold"} color= 'primary'>BR
                <LockOpenIcon color="primary" sx={{ fontSize: 100 }} />IN</Typography>
               
           </BannerContent>
           <VerticalDividers  orientation="vertical" flexItem />
           
           <BannerContent marginLeft={'140px'}>

               <Typography variant='h3'  whiteSpace= {'nowrap'} fontWeight= {"bold"} color= 'primary'>
                
                Recap your knowledge</Typography>

               <Typography variant='h4' color='#1e3a8a'>study smart not hard</Typography>

                <GetStartbutton > GET STARTED!</GetStartbutton>

            </BannerContent>

        </BannerContainer >


        <Typography  variant='h2' textAlign="center" padding={9}  fontWeight={'bold'}>
            Features </Typography>


{/* card section */}
{/* send to login/sign up page onClick */}
    <BannerContainer paddingBottom={22}>

      <GrowingCard>

      <CardHeader sx={{ backgroundColor: '#ffeb9a' }}>
        Study
      </CardHeader>

        <CardActionArea>

        <img 
                    src={studyimg} 
                    alt="Cardly Logo" 
                    style={{ height: '100%', width: '100%' }}
                />
        </CardActionArea>

      </GrowingCard>


      <GrowingCard>

      <CardHeader sx={{ backgroundColor: '#003677', color:'white'}}>
          Flashcards
      </CardHeader>

          <CardActionArea>

          <img 
                    src={flashcardimg} 
                    alt="Cardly Logo" 
                    style={{ height: '100%', width: '100%' }}
                />

          </CardActionArea>

      </GrowingCard>  

      <GrowingCard>

      <CardHeader sx={{ backgroundColor: '#f9ae8f' }}>      
          Practice Tests
      </CardHeader>

          <CardActionArea>

            

          <img 
                    src={practiceimg} 
                    alt="Cardly Logo" 
                    style={{ height: '100%', width: '100%' }}
                />

          </CardActionArea>

      </GrowingCard>  


      <GrowingCard>

      <CardHeader sx={{ backgroundColor: '#78c8bd' }}>
          Explore
      </CardHeader>

          <CardActionArea>

          <img 
                    src={exploreimg} 
                    alt="Cardly Logo" 
                    style={{ height: '100%', width: '100%' }}
                />

          </CardActionArea>

      </GrowingCard>  

        </BannerContainer>

        </div>   

    )
        
  
}

export default LandingPage
