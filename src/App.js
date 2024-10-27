import './App.css'
import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '../src/routes';
import Botombar from './components/Botombar/Botombar';

export default function App() {
  // تغییر نام متغیر به routesList
  let routesList = useRoutes(routes);

  return (
    
    <div className='body'>


    <div className='container'>
      {routesList} {/* نمایش مستقیم routesList */}
      <Botombar />
    </div>

    
   
    </div>
  );
}
