import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  outline:'none',
  boxShadow: 24,
  p: 4,
  borderradius:4,
};

const features=["Prioritise ranking in conversation and search",
    "See approximately twice as many Tweets between ads in your For You and Following timelines",
    "Add Bold and italic  text in yout Tweet",
    "Post Longer videos and 1080p video Upload",
    "All the existing blue features,including Edit Tweet,bookmark folders and early access to new features"
] 



export default function SubscriptionModal({handleClose,open}) {


  const[plan,setPlan]=React.useState("Anually")

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="flex items-center space-x-3">
                <IconButton onClick={handleClose} aria-label="close">
                  <CloseIcon />
                </IconButton>
              </div>
              <div className='flex justify-center py-10'>
                <div className='w-[80%] space-y-10'>
                    <div className='p-5 rounded-md flex items-center justify-between shadow-lg bg-slate-400'>
                        <h1 className='text-xl pr-5'>Blue subscribers with a verified phone number will get a blue checkmark</h1>
                        <img className='w-24 h-24' src='https://tse1.mm.bing.net/th?id=OIP.Cm2g_9n8akBAXs95pMHnkwHaHa&pid=Api&P=0&h=180' alt='bluetick'/>

                    </div>
                    <div className='flex justify-between rounded-full px-5 py-3 bg-gray-600'>
                        <div>
                            <span onClick={()=>setPlan("Anually")} className={`${plan=="Anually"?"text-black":"text-gray-400"} cursor-pointer`}>Anually </span>
                            <span className='text-green-500 text-sm ml-5'>SAVE 12%</span>
                        </div>
                        <p onClick={()=>setPlan("Monthly")} className={`${plan=="monthly"?"text-black":"text-gray-400"} cursor-pointer`}>
                            Monthly
                        </p>

                    </div>
                    <div className='space-y-3'>
                        {features.map((item)=><div className='flex items-center space-x-5'>
                            <FiberManualRecordIcon sx={{width:"7px",height:"7px"}}/>
                            <p className='text-xs'>{item}</p>


                        </div>)}

                    </div>
                    <div className='cursor-pointer flex justify-center bg-gray-700 text-white rounded-full px-5 py-3'>
                        <span className='line-through italic'> ₹7,800.00</span>
                        <span className='px-5'> ₹6,800/year</span>
                    </div>

                </div>


              </div>
       
        </Box>
      </Modal>
    </div>
  );
}