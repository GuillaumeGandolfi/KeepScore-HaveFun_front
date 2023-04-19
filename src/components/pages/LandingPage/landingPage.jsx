import { Avatar, Box } from '@mui/material';
import React from 'react';
import './landingPage.css';
import image from '../../../assets/image.png';
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
  
    <Box className='Box'
      sx={{
        width:300,
        height: 300,
    
        position: 'absolute',
        marginTop: 'auto',
        marginLeft: 'auto',
       
        top: '',
        left: '35%' 
        }}
      >
        <Avatar alt='mascotte'src={image} 
          sx={{
            width:300,
            height:300,
          }}
          
        />
        <center className='text'>
          <b>
            Gérer votre argent simplement...
          
        </b>
        </center>
        <p style={{ marginTop: '30px' }}>
          <Link to={'/signin'} style={{ marginRight:'30px'}}>SignIn</Link>
          <Link to={'/signup'}>SignUp</Link>
         
        </p>
        
      </Box>
      

  );
}


export default LandingPage;