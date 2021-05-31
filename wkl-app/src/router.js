import React from 'react';
import Home from './components/Home/Home.jsx'
import Rules from './components/Rules/Rules.jsx'
import LeagueCreate from './components/LeagueCreate/LeagueCreate.jsx'
// import Home from './components/Home/Home.jsx'

const routes = {
  "/": () => <Home />,
  "/Rules": () => <Rules />,
  "/LeagueCreate": () => <LeagueCreate />

};

export default routes;