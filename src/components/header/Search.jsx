import React from 'react';
import { useGlobalContext } from '../../context/Context';

const Search = () => {
  const [contextValue, setContextValue] = useGlobalContext();
  console.log("context value : " + contextValue);
  /* triggering search on enter button */
  const SearchFunc = (e) => {
    if(e.key === 'Enter'){
      const searchValue = e.target.value
      setContextValue(searchValue.toLowerCase());
    }
  }
  return(
    <>
      <div className="search-div">
        <input 
        type='text' 
        placeholder="Search and Enter"
        onKeyPress={(e) => SearchFunc(e)}
        />      
      </div>
    </>
  )
}

export default Search;