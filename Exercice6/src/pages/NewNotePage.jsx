import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NoteForm from '../component/NoteForm';

export default function NewNotePage() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleCreate = async (noteData) => {
    try {
      await axios.post('/api/notes', noteData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      navigate('/notes');
    } catch (err) {
      console.error('Erreur lors de la création de la note', err);
      alert('Impossible de créer la note. Vérifie ta connexion ou ton authentification.');
    }
  };

  return (
    <div>
      <h2>Créer une nouvelle note</h2>
      <NoteForm
        onSubmit={handleCreate}
        submitLabel="Créer la note"
      />
    </div>
  );
}
