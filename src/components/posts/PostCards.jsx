import React, { useState } from 'react';

const PostCards = (props) => {
  const [descCard, setDescCard] = useState('hidden');
  return (
    <>
      <div>
        <div
          className="post-card"
          onClick={() => setDescCard('description-box')}
        >
          <div>
            <span>{props.title}</span>
          </div>
          <div>
            <img src={props.image} alt="card image" />
          </div>
          <div>
            <span>{props.category}</span>
          </div>
        </div>
        <div className={descCard}>
          <div>
            <span onClick={() => setDescCard('hidden')}>X</span>
          </div>
          <div>
            <p>{props.description}</p>
            <div>
              <span>Source: {props.source}</span>
              <a href={props.sourcelink}>Read More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCards;
