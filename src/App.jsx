import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppProvider from './context/AppContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LandlordDashboard from './pages/LandlordDashboard';
import TenantDashboard from './pages/TenantDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import AppNavbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';

export default function App() {
  return (
        <div>
        <AppNavbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/landlord"
            element={
              <ProtectedRoute>
                <LandlordDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tenant"
            element={
              <ProtectedRoute>
                <TenantDashboard />
              </ProtectedRoute>
            }
          />
          
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        
        <Footer/>
        </div>
  );
}
