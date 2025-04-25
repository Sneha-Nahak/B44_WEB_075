
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

export default function ProtectedRoute({ children }) {
  const { currentUser } = useContext(AppContext);

  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  return children;
}
