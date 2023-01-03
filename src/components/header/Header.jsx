import React from 'react';
import Search from './Search';
//import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../../context/Context';
const Header = () => {
  const [contextVal, setContextVal] = useGlobalContext();
  return (
    <>
      <div className="header-container">
        <div>
          <button onClick={()=> setContextVal("All")}>Gallery</button>
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
