import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import SubscriptionModal from '../SubscriptionModal/SubscriptionModal';

const RightPart = () => {
    const [openSubscriptionModel, setOpenSubscriptionModel] = React.useState(false);
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    const handleOpenSubscriptionModel = () => setOpenSubscriptionModel(true);
    const handleCloseSubscriptionModel = () => setOpenSubscriptionModel(false);

    const handleChangeTheme = () => {
        setIsDarkMode(!isDarkMode); // Toggle dark mode state
        console.log("Change Theme");
    }

    return (
        <div className='py-5 sticky top'>
            <div className='relative flex items-center'>
                <input type='text' className='py-3 rounded-full text-gray-500 w-full pl-12' />
                <div className='absolute top-0 left-0 pl-3 pt-3'>
                    <SearchIcon className='text-gray-500' />
                </div>
                <Brightness6Icon
                    className={`ml-3 cursor-pointer ${isDarkMode ? 'text-gray-300' : 'text-yellow-500'}`} // Conditional icon color based on dark mode
                    onClick={handleChangeTheme}
                />
            </div>

            <section className='my-5'>
                <h1 className='text-xl font-bold'>Get Verified</h1>
                <h1 className='font-bold my-2'> Subscribe to unlock new Features</h1>
                <Button variant="contained" sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}
                    onClick={handleOpenSubscriptionModel}>
                    Get Verified
                </Button>
            </section>

            <section className='mt-7 space-y-5'>
                <h1 className='font-bold text-x1 py-1'>What's happening?</h1>
                <div>
                    <p className='text-sm'>INDIA WORLD CUP  </p>
                    <p className='font-bold'>INDIA is Leading </p>
                </div>
                {[1, 1, 1, 1].map((item) => <div className='flex justify-between w-full' key={item}>
                    <div>
                        <p>Entertainment Trending</p>
                        <p className='font-bold'>#TheMarvels</p>
                        <p>34.3k Tweets</p>
                    </div>
                    <MoreHorizIcon />
                </div>)}
            </section>

            <section>
                <SubscriptionModal open={openSubscriptionModel} handleClose={handleCloseSubscriptionModel} />
            </section>
        </div>
    );
}

export default RightPart;
