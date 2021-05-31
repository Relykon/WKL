import React from 'react';
import { A } from 'hookrouter';


const NavBar = () => {

  return (
    <div>
      <A href='/fantasy'> Fantasy Kickball </A> <br/>
      <A href='/rules'> "Rules" of Kickball </A>
    </div>
  );
};

export default NavBar;