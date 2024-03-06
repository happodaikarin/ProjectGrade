// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login/loginPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Usa `element` en lugar de `component` para definir el componente de la ruta */}
        <Route exact path="/" element={<LoginPage />} />
        {/* Agrega más rutas según sea necesario, siguiendo el mismo patrón */}
      </Routes>
    </Router>
  );
}

export default App;
