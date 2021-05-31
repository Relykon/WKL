import React, { useState, useEffect } from 'react';
// import NavBar from './NavBar';
// import FantasyDashboard from './FantasyDashboard';

import logo from '../../assets/img/Logo.png';


const Home = () => {

  return (
    <div className="app" style={{backgroundImage: `url(${logo})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      {/* <NavBar /> */}
      <h1>HOME PAGE!</h1>

    </div>
  );

};

export default Home;