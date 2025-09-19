import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import ProtectedRoute from './component/ProtectedRoute';
import StartupRedirect from './component/StartupRedirect';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotesPage from './pages/NotesPage';
import NewNotePage from './pages/NewNotePage';
import NotFound from './pages/NotFound';
import EditNotePage from './pages/EditNotePage';


export default function App() {
  return (
    <BrowserRouter>
      <StartupRedirect />
      <Navbar />
      <Routes>
        {/*publiques*/}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/*protégées*/}
        <Route path="/notes" element={
            <ProtectedRoute>
              <NotesPage />
            </ProtectedRoute>
          }
        />

        <Route path="/notes/new" element={
            <ProtectedRoute>
              <NewNotePage />
            </ProtectedRoute>
          }
        />

        <Route path="/notes/:id" element={
            <ProtectedRoute>
              <EditNotePage />
            </ProtectedRoute>
          }
        />

        {/*404*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
