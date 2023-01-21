
import './App.css';
import Article from './components/Article/Article'
import Brand from './componentt/Brand/Brand'
import Cta from './components/Cta/Cta'
import Feature from './components/Feature/Feature'
import Navbar from './components/Navbar/Navbar'


function App() {
  const name ="Julia"
  return (
    <div className="App">
      <h1> Olá</h1>
      <p>meu primeiro app</p>
      <p>Olá, {name}</p>
    </div>
  );
}

export default App;
