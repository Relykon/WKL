import React from 'react';
import Home from './components/Home.jsx'
import Rules from './components/Rules.jsx'
import LeagueCreate from './components/Fantasy/LeagueCreate.jsx'
import FantasyDashboard from './components/Fantasy/FantasyDashboard.jsx'

const routes = {
  "/": () => <Home />,
  "/fantasy": () => <FantasyDashboard />,
  "/rules": () => <Rules />,
  "/leagueCreate": () => <LeagueCreate />
};

export default routes;