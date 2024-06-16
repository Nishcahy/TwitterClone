import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { navigationMenu } from './NavigationMenu';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Store/Auth/Action';

const Navigation = () => {
  const {auth}=useSelector(store=>store)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch=useDispatch();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("logout");
    handleClose();
    dispatch(logout())
  };

  return (
    <div className='h-screen sticky top-0'>
      <div className='py-5'>
        <img 
          height="30" 
          width="30" 
          viewBox="0 0 24 24" 
          aria-hidden="true" 
          src="https://loodibee.com/wp-content/uploads/Twitter-X-Logo.png" 
          alt="Logo"
        />
      </div>

      <div className='space-y-6'>
        {navigationMenu.map((item) => (
          <div 
            key={item.title} 
            className='cursor-pointer flex space-x-3 items-center' 
            onClick={() => item.title === "Profile" ? navigate(`/profile/${auth.user?.id}`) : navigate(item.path)}
          >
            {item.icon}
            <p className='text-xl'>{item.title}</p>
          </div>
        ))}
        
        <div className='py-10'>
          <Button 
            sx={{ width: "100%", borderRadius: "29px", py: "15px", bgcolor: "#1e88e5" }}
            variant='contained'
          > 
            Tweet
          </Button>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-3'>
          <Avatar 
            alt="username" 
            src='https://tse4.mm.bing.net/th?id=OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa&pid=Api&P=0&h=220' 
          />
          <div>
            <span>{auth.user?.fullName}</span> <br />
            <span className='opacity-70'>@{auth.user?.fullName.split(" ").join("_").toLowerCase()}</span>
          </div>
        </div>

        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Navigation;
