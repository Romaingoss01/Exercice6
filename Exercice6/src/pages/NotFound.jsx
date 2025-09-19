import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  const token = localStorage.getItem('token');
  const redirectPath = token ? '/notes' : '/login';

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page introuvable</h1>
      <Link to={redirectPath}>
        <button>Retour à l'accueil</button>
      </Link>
    </div>
  );
}
