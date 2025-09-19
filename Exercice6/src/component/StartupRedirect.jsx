import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StartupRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const currentPath = window.location.pathname;

    // Si pas de token et l'utilisateur est sur la racine, on le redirige
    if (!token && currentPath === '/') {
      navigate('/login');
    }
  }, [navigate]);

  return null;
}
