import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Users from './users/pages/Users';
import UserItem from "./users/components/UserItem";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route element={<Users/>} path='/' />     
        <Route element={<UserItem/>} path='/user-item' />     
        
      </Routes>
    </Router>
    

  );
}

export default App;
