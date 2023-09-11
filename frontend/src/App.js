import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';


function App() {
  return (
    <Router>
      <MainNavigation/>
      <main>
        <Routes>        
          <Route element={<Users/>} path='/' />    
          <Route element={<UserPlaces/>} path='/:userId/places'/> 
          <Route element={<NewPlace/>} path='/places/new' />             
        </Routes>

      </main>
      
    </Router>
    

  );
}

export default App;
