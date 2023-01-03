import React from 'react';
import Search from './Search';
//import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../../context/Context';
const Header = () => {
  const [contextVal, setContextVal] = useGlobalContext();

  const SetHome = () =>{
    setContextVal("All");
  }
  return (
    <>
      <div className="header-container">
        <div>
          {/* changing context by clicking home button */}
          <button onClick={()=> SetHome()}>Gallery</button>
        </div>
        <div>
          <Search />
        </div>
      </div>
    </>
  );
};

export default Header;
