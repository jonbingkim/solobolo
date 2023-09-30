import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import axios from 'axios';
import Rows from './components/row';
import Footer from './components/footer';
import Button from 'react-bootstrap/Button';
import AppendRows from './containers/mainContainer';
import './app'
import Header from './components/header';






function App() {

  return ( 
 <div className='wrapper'>
      <header>
        <Header/>
      </header>
      <main>
      <AppendRows/>
      </main>
    <footer>
      <Footer/>
    </footer>
 </div>
   

    
    
  );
}

export default App;