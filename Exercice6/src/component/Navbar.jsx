import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav style={styles.nav}>
      <h3 style={styles.logo}>Secure Notes</h3>
      <div style={styles.links}>
        {token ? (
          <>
            <Link to="/notes" style={styles.link}>Mes notes</Link>
            <Link to="/notes/new" style={styles.link}>Nouvelle note</Link>
            <button onClick={handleLogout} style={styles.button}>Déconnexion</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Connexion</Link>
            <Link to="/register" style={styles.link}>Inscription</Link>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    margin: 0,
  },
  links: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  button: {
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    padding: '6px 12px',
    cursor: 'pointer',
  },
};
