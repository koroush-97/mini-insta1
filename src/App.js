import './App.css'
import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '../src/routes';
import Botombar from './components/Botombar/Botombar';
import { Divider } from '@mui/material';

export default function App() {
  // تغییر نام متغیر به routesList
  let routesList = useRoutes(routes);

  return (
    
    <div className='body'>


    <div className='container'>
      {routesList} {/* نمایش مستقیم routesList */}
      <Divider sx={{ borderWidth: "2px" }} />
      <Botombar />
    </div>

    
   
    </div>
  );
}
