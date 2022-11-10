// import logo from './logo.svg';
import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home/Home';
import About from './Routes/About/About';
import Projects from './Routes/Projects/Projects'
import Contact from './Routes/Contact/Contact'


function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/projects' element={<Projects/>}/>
    <Route exact path='/contact' element={<Contact/>}/>

    </Routes>
    </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
