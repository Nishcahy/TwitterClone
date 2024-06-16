import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Component/Home/HomePage';
import Authentication from './Component/Authentication/Authentication';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from './Store/Auth/Action';
import lightTheme from './themes/lighttheme';
import darkTheme from './themes/darkTheme';
import { ThemeProvider } from '@mui/material/styles';
import RightPart from './Component/RightPart/RightPart';

function App() {
  const jwt=localStorage.getItem("jwt")
  const {auth}=useSelector(store=>store)
  const dispatch=useDispatch();
  const [themeMode, setThemeMode] = useState('light'); // default theme is light

  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  useEffect(()=>{
    if(jwt){
      dispatch(getUserProfile(jwt))
    }
  },[auth.jwt])

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
   
    <div className="">
      <Routes>
        <Route path='/*' element={ auth.user ? <HomePage/>:<Authentication/>} ></Route>
      </Routes>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
    </ThemeProvider>
  );
}

export default App;