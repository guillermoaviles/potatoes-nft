import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main />}/>
      </Routes>
    </div>
  );
}

export default App;
