import React from 'react';
import './style.css';
import PostsList from './components/posts/PostsList';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes forceRefresh>
          <Route exact path="/" element={< PostsList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
