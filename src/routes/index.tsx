import { Routes, Route } from 'react-router-dom';
import Login from '@/components/Login/Login';
import Home from '@/components/Home/Home';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
  </Routes>
);

export default AppRoutes;
