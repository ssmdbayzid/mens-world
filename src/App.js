import logo from './logo.svg';
import './App.css';
import Header from './component/Share/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/"  element={<Home></Home>}></Route>
        <Route path="/home"  element={<Home></Home>}></Route>
      </Routes>



    </div>
  );
}

export default App;
