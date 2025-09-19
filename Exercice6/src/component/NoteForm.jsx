import React, { useState, useEffect } from 'react';

export default function NoteForm({ initialData = {}, onSubmit, submitLabel }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (initialData.title) setTitle(initialData.title);
    if (initialData.content) setContent(initialData.content);
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Titre</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Contenu</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit">{submitLabel || 'Enregistrer'}</button>
    </form>
  );
}
