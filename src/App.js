
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Pnf from './components/Pnf';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='*' element={<Pnf></Pnf>}></Route>
      </Routes>
    </div>
  );
}

export default App;
