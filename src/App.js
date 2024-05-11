
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Pnf from './components/Pnf';
import HomeMobile from './components/Home/HomeMobile';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='*' element={<Pnf></Pnf>}></Route>
      <Route path='/tablet' element={<HomeMobile></HomeMobile>}></Route>
      </Routes>
    </div>
  );
}

export default App;
