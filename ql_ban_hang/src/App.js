import './App.css';
import Index from './pages';
import AllProDuct from './pages/all-products-of-type';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/cart';
import Detail from './pages/detail';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
import ChangeInfor from './pages/change-infor';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Index/>}/>
    <Route path="/products-type" element={<AllProDuct/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/detail" element={<Detail/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/change-infor" element={<ChangeInfor/>}/>
    </Routes>
  );
}

export default App;
