import React, { useState } from 'react';
import '../Styles/form.css'; 

const Form = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');

  const validarEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMensajeExito('');

    if (nombre.length <= 5 || !validarEmail(email)) {
      setError('Por favor verifique su información nuevamente');
      return;
    }

    console.log({ nombre, email });
    setMensajeExito(`Gracias ${nombre}, te contactaremos cuando antes vía mail`);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Contacto</h2>
      <div className="form-group">
        <label>Nombre completo:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="form-input"
          placeholder="Ingresa tu nombre completo"
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
          placeholder="Ingresa tu correo electrónico"
        />
      </div>
      <button type="submit" className="submit-button">Enviar</button>

      {error && <p className="error-message">{error}</p>}
      {mensajeExito && <p className="success-message">{mensajeExito}</p>}
    </form>
  );
};

export default Form;
