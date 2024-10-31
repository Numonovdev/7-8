import * as React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import Price from "./Price";
import CountryOne from "./CountryOne";
import CountryTwo from "./CountryTwo";

function Hero() {
  return (
    <>
      <Box
        sx={{
          maxWidth:'1200px',
          border: '1px solid black',
          backgroundColor: 'white',
          width: '100%',
          marginX: 'auto',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingY: 1,
          gap: 3,
          paddingX: 2,
          borderRadius: 10,
          marginTop: 20,
          boxSizing: 'border-box',
        }}
      >
        {['Convert', 'Send', 'Charts', 'Alerts'].map((text) => (
          <Box
            key={text}
            className="hover-item"
            sx={{
              backgroundColor: 'white',
              paddingY: 1,
              border: '1px solid #313F5B',
              paddingX: 5,
              width: '25%',
              borderRadius: 5,
              textAlign: 'center',
              color: '#313F5B',
              '&:hover': {
                color: 'white',
                backgroundColor: '#313F5B',
              },
            }}
          >
            <Typography>{text}</Typography>
          </Box>
        ))}
      </Box>
       <Box 
       sx={{
        maxWidth:'1200px',
        width:'full',
        display:'flex',
        flexDirection:'column',
        marginX:'auto',
       }}
       >
      <Box
        sx={{
          boxShadow:'0 0 10px 0 black',
          width: '80%',
          marginX: 'auto',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingY: 3,
          fontSize:'30px',
          borderRadius: 1,
          marginTop: 5,
          position:'relative',
        }}
      >
        <Box 
        sx={{
            borderRadius:1,
            backgroundColor:'white',
        }}
        >
            <Price/>
        </Box>
        <Box>
            <CountryOne/>
        </Box>
        <SwapHorizIcon
        sx={{
            top:'42px',
            right:'350px',
            fontSize:'45px',
        }}
        ></SwapHorizIcon>
        <Box>
            <CountryTwo/>
        </Box>
      </Box>
      <Box sx={
        {
            marginX:'auto',
            maxWidth:'1200px',
            width:'1200px',
            // backgroundColor:'red',
            display:'flex',
            justifyContent:'end',
            marginTop:'40px',
        }
      }>
      <Button
      sx={{
        width:'150px',
        height:'50px',
      }}
      variant="contained">Contained</Button>
      </Box>
      </Box>
    </>
  );
}

export default Hero;
