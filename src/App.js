import React, { useContext } from "react";
import "./style.css";
import PostsList from './components/posts/PostsList';
import Header from './components/header/Header';


export default function App() {

  return (
    <div>
      <Header />
      <PostsList />
    </div>
  );
}
