import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get('/api/notes', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setNotes(res.data);
      } catch (err) {
        setError('Impossible de charger les notes.');
      }
    };

    fetchNotes();
  }, [token]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/notes/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNotes(notes.filter(note => note.id !== id));
    } catch (err) {
      setError('Erreur lors de la suppression.');
    }
  };

  return (
    <div>
      <h2>Mes notes</h2>
      <Link to="/notes/new">
        <button>Créer une nouvelle note</button>
      </Link>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {notes.map(note => (
          <li key={note.id} style={{ marginBottom: '15px' }}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <Link to={`/notes/${note.id}`}>
              <button>Modifier</button>
            </Link>
            <button onClick={() => handleDelete(note.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
