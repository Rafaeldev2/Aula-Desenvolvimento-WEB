import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contador from './Components/contador';
import Input from './Components/input';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/inicio'>Home</Link>
        <Link to='/sobre'>Sobre</Link>
        <Contador/>
        <Input/>
      </header>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/inicio" element={<Home/>} />
          <Route path="/sobre" element={<Sobre/>} />
      </Routes>
    </div>
  );
}

export default App;
