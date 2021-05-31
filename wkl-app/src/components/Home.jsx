import React, { useState, useEffect } from 'react';
import NavBar from './NavBar.jsx';
import Standings from './Standings.jsx'
// import FantasyDashboard from './FantasyDashboard';

import logo from '../assets/img/Logo.png';


const Home = () => {

  return (
    <div className="app" style={{backgroundImage: `url(${logo})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      {/* <NavBar /> */}
      <h1>HOME PAGE!</h1>
      <NavBar />
      <Standings />
    </div>
  );

};

export default Home;