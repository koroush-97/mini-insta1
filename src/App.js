import './App.css'
import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '../src/routes';
import Botombar from './components/Botombar/Botombar';
import { Divider } from '@mui/material';

export default function App() {
  let routesList = useRoutes(routes);

  return (
    
    <div className='body'>


    <div className='container'>
      {routesList} 
      <Divider sx={{ borderWidth: "2px" }} />
      <Botombar />
    </div>

    
   
    </div>
  );
}
