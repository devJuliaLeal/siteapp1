
import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from './conteiners';
import {Cta, Brand, Navbar} from './components';


function App() {
  
  return (
    <div className="App">
      <div className="gradient__bg">
      <Navbar/>
      <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
    </div>
  );
}

export default App;
