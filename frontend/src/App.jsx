import logo from './logo.svg';
import './App.css';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import { Route , Routes } from 'react-router-dom';
function App() {
  return (
    <div className="p-4 h-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />

      </Routes>
{/* <Login/> */}
{/* <Signup/> */}
{/* <Home/> */}
    </div>
  );
}

export default App;
