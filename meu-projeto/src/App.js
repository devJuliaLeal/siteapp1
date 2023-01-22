
import {Footer, Blog,  Features, Header } from './conteiners';
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
      
      <Features/>
      
      <Cta/>
      <Blog/>
      <Footer/>    </div>
  );
}

export default App;
