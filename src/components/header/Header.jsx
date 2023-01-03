import React from 'react';
import Search from './Search';

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div>
          <h4>Gallery</h4>
        </div>
        <div>
          <Search />
        </div>
      </div>
    </>
  );
};

export default Header;
