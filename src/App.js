import logo from './logo.svg';
import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"



const App =  () => {

  const [progress, setProgress] = useState(0);
  const apiKey = 'aee3fc987233451396605be46bb93dc6'
  

  

  
   {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
           color='#f11946'
           progress={progress}
           height = {3}
           
      />
        <Routes>
          <Route exact path ="/" element ={<News setProgress = {setProgress} apiKey = {apiKey} key ="general" pageSize = {5} country = "us" category ="general"/>}/>
          <Route exact path="/business" element ={<News setProgress = {setProgress} apiKey = {apiKey} key="business" pageSize={5} country="in" category="business"/>}/> 
          <Route exact path="/entertainment" element ={<News setProgress = {setProgress} apiKey = {apiKey} key="entertainment" pageSize={5} country="in" category="entertainment"/>}/>
          <Route exact path="/general" element ={<News setProgress = {setProgress} apiKey = {apiKey} key="general" pageSize={5} country="in" category="general"/>}/> 
          <Route exact path="/health" element ={<News setProgress = {setProgress} apiKey = {apiKey} key="health" pageSize={5} country="in" category="health"/> }/>
          <Route exact path="/science" element ={<News setProgress = {setProgress} apiKey = {apiKey} key="science" pageSize={5} country="in" category="science"/> }/>
          <Route exact path="/sports" element ={<News setProgress = {setProgress} apiKey = {apiKey} key="sports" pageSize={5} country="in" category="sports"/>}/> 
          <Route exact path="/technology" element ={<News setProgress = {setProgress} apiKey = {apiKey} key="technology" pageSize={5} country="in" category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

