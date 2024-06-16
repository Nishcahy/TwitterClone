import React from 'react';
import { Button, Grid } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import AuthModel from './AuthModel';
import { useState } from 'react';

export default function Authentication() {
  const [openAuthModel,setOpenAuthModel]=useState(false);
  const handleOpenAuthModel=()=>setOpenAuthModel(true);
  const handleCloseAuthModel=()=>setOpenAuthModel(false);
  return (
    <div className="relative">
      <Grid className="overflow-y-hidden" container>
        <Grid className="hidden lg:block" item lg={7}>
          <img 
            src="https://tse3.mm.bing.net/th?id=OIP.1ls7K1vigWwyqDC1p7QC6QHaEo&pid=Api&P=0&h=180" 
            className="w-full h-screen" 
            alt="Background"
          />
          <div className="absolute top-[61%] left-[33%]">
            <img 
              height="200" 
              width="200" 
              src="https://tse1.mm.bing.net/th?id=OIP.EMSkKbPUe-m9NWb96yIjJAHaHa&pid=Api&rs=1&c=1&qlt=95&w=113&h=113" 
              alt="Overlay"
            />
          </div>
        </Grid>
        <Grid className='px-10' lg={5} xs={12}>
          <h1 className='mt-10 font-bold text-7xl'>Happening Now</h1>
          <h1 className='font-bold text-3xl py-16'>Join Twitter Today</h1>
          <div className='w-[60%]'>
            <div className='w-full'>
              <GoogleLogin width={330}/>
              <p className='py-5 text-center'>OR</p>
              <Button onClick={handleOpenAuthModel} fullWidth variant='contained' size='large' sx={{
                borderRadius:"29px",
                py:"7px",
              }}>
                Create Account
              </Button>
              <p className='text-sm mt-2'>By signing up,you agree to the Terms of Service and Privacy Policy,Including Cookie Use.</p>
            </div>
            <div className='mt-10'>
              <h1 className='font-bold text-xl mb-5'>Already Have Account?</h1>
            <Button onClick={handleOpenAuthModel} fullWidth variant='outlined' size='large' sx={{
                borderRadius:"29px",
                py:"7px",
              }}>
                Login
              </Button>

            </div>

          </div>

        </Grid>

      </Grid>
      <AuthModel open={openAuthModel} handleClose={handleCloseAuthModel}/>
    </div>
  );
}
