import { Routes, Route, } from 'react-router-dom';
import Login from '@/components/Login/Login';
import Home from '@/components/Home/Home';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={
      <ProtectedRoute isAuthenticated={true}>
        <Home />
      </ProtectedRoute>
    } />
  </Routes>
);

export default AppRoutes;
