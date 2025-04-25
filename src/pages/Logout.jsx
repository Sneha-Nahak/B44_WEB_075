import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const { setCurrentUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <div className="text-center my-5">
      <h2>You have been logged out</h2>
      <button onClick={handleLogout} className="btn btn-primary mt-3">Log back in</button>
    </div>
  );
}
