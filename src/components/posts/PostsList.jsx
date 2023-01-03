import React, { useState, useEffect } from 'react';
import Data from '../../data/Data';
import PostCards from './PostCards';
import { useGlobalContext } from '../../context/Context';
import { VscSearchStop } from 'react-icons/vsc';

const PostList = () => {
  /* using global context */
  const contextValue = useGlobalContext();

  /* state of post cards */
  const [cardState, setCardState] = useState(Data);

  /* state for hidden div */
  const [classState, setClassState] = useState('hidden');

  /* function to search and filter the data */
  useEffect(() => {
    /* default value */
    if (contextValue[0] === 'All') {
      setCardState(Data);
      setClassState('hidden');
    } else {
      /* updater */
      const updater = Data.filter((element) => {
        return (
          element.category.toLowerCase() === contextValue[0] ||
          element.title.toLowerCase().includes(contextValue[0]) ||
          element.description.toLowerCase().includes(contextValue[0]) ||
          element.source.toLowerCase().includes(contextValue[0])
        );
      });
      console.log(!updater.length); //for checking updater's length
      /* when search is not found */
      if (!updater.length) {
        setClassState('search-empty');
      } else {
        setClassState('hidden');
      }
      /* updating state of post cards on filter */
      setCardState(updater);
    }
  }, [contextValue]);

  /* rendering the posts */
  return (
    <>
      <div className="post-container">
        {cardState.map((ele) => {
          return (
            <PostCards
              key={ele.key}
              title={ele.title}
              description={ele.description}
              image={ele.image}
              category={ele.category}
              source={ele.source}
              sourcelink={ele.sourcelink}
            />
          );
        })}
        {/* hidden div to display when no data is found */}
        <div className={classState}>
          <div className="search-empty-inner">
            <span>
              <VscSearchStop />
            </span>
            <span>No Result Found</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostList;
