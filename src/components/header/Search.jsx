import React, { useState } from 'react';
import { useGlobalContext } from '../../context/Context';

const Search = () => {
  const [contextValue, setContextValue] = useGlobalContext();
  /* search field state to clear it*/
  const [searchState, setSearchState] = useState();
  console.log('context value : ' + contextValue);
  /* triggering search on enter button */
  const SearchFunc = (e) => {
    if (e.key === 'Enter') {
      const searchValue = e.target.value;
      setContextValue(searchValue.toLowerCase());
      setSearchState('');
    }
  };
  return (
    <>
      <div className="search-div">
        <input
          type="text"
          value={searchState}
          placeholder="Search and Enter"
          onKeyPress={(e) => SearchFunc(e)}
          onChange={(e) => setSearchState(e.target.value)}
        />
      </div>
    </>
  );
};

export default Search;
