import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '/home/ramses/FrontEnd/src/pages/login/LoginPage.css'; // Asegúrate de que este archivo contiene tus estilos

function LoginPage() {
  let navigate = useNavigate();
  // Inicializar userType como 'cliente'
  const [userType, setUserType] = useState('cliente');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí agregarías la validación de las credenciales
    if (userType === 'cliente') {
      // Lógica para iniciar sesión como cliente
      navigate('/cliente');
    } else if (userType === 'admin') {
      // Lógica para iniciar sesión como administrador
      navigate('/admin');
    }
  };

  return (
    <div className="login-container">
      <div className="title">BEER COFFEE & COMPANY</div>
      <div className="user-selection">
        <button onClick={() => setUserType('cliente')} className={userType === 'cliente' ? 'active' : ''}>CLIENTE</button>
        <button onClick={() => setUserType('admin')} className={userType === 'admin' ? 'active' : ''}>ADMIN</button>
      </div>
      <form onSubmit={handleLogin} className="login-form">
        {userType === 'cliente' && (
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        )}
        {userType === 'admin' && (
          <>
            <input 
              type="email" 
              placeholder="Correo" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Contraseña" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </>
        )}
        <button type="submit">INGRESAR</button>
      </form>
      <div className="instructions">
        MANUAL DE USO: <br />
        1. SI ERES UN CLIENTE POR FAVOR SELECCIONA CLIENTE Y COLOCA TU NOMBRE DE USUARIO <br />
        2. SI ERES ADMINISTRADOR SELECCIONA ADMINISTRADOR Y COLOCA TU CORREO Y CONTRASEÑA
      </div>
    </div>
  );
}

export default LoginPage;
