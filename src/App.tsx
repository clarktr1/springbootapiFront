import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/home'
import NavBar from './components/NavBar/NavBar';

function App() {
 

  return (
    <>
      <NavBar/>
      <Home/>
    </>
  )
}

export default App
