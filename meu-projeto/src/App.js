
import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from './conteiners';
import {Cta, Brand, Navbar} from './components';
import './App.css';

const App = () => {
  
  return (
    <div className="App">
      <div className="gradient__bg">
      <Navbar/>
      <Header/>
      </div>
      <Brand/>
      <whatGPT3/>
      <Features/>
      <possibility/>
      <Cta/>
      <Blog/>
      <Footer/>    </div>
  );
}

export default App;
