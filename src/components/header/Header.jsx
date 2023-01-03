import React from 'react';
import Search from './Search';
//import { NavLink } from 'react-router-dom';
const Header = () => {

  return (
    <>
      <div className="header-container">
        <div>
          <button onClick={()=> {window.location.reload()}}>Gallery</button>
          {/* <NavLink className="home-btn" to="/refresh">
            <h4>Gallery</h4>
          </NavLink> */}
        </div>
        <div>
          <Search />
        </div>
      </div>
    </>
  );
};

export default Header;
