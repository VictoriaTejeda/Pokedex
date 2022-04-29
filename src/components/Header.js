import React from "react";
import logoPokemon from '../asset/image/logoPokemon.png'
import '../Styles/Header.css'
export const Header = () => {

  return<>
     <nav className="navbar">
         <img src={logoPokemon} className='logo' alt="Pokemon" />
     </nav>
  </>
};
