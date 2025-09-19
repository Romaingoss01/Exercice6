import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NoteForm from '../component/NoteForm';

export default function EditNotePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [note, setNote] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(`/api/notes/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setNote(res.data);
      } catch (err) {
        setError('Impossible de charger la note.');
      }
    };

    fetchNote();
  }, [id, token]);

  const handleUpdate = async (updatedNote) => {
    try {
      await axios.put(`/api/notes/${id}`, updatedNote, {
        headers: { Authorization: `Bearer ${token}` }
      });
      navigate('/notes');
    } catch (err) {
      setError('Erreur lors de la mise à jour.');
    }
  };

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!note) {
    return <p>Chargement de la note...</p>;
  }

  return (
    <div>
      <h2>Modifier la note</h2>
      <NoteForm
        initialData={note}
        onSubmit={handleUpdate}
        submitLabel="Mettre à jour"
      />
    </div>
  );
}
