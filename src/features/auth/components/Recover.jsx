
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Recover = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Si el correo está registrado, recibirás instrucciones para recuperar tu cuenta.');
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-8 col-lg-5">
          <form
            onSubmit={handleSubmit}
            className="p-4 p-md-5 rounded-4 shadow-lg border"
            style={{ backgroundColor: '#121d2b', borderColor: '#33445a' }}
          >
            <div className="text-center mb-4">
              <div className="display-3 mb-3">🛸</div>
              <h1 className="h2 fw-bold text-light">Recuperar cuenta</h1>
              <p className="text-secondary">
                No te preocupes, te ayudaremos a volver a tu aventura.
              </p>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="form-label text-light">
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                placeholder="nombre@ejemplo.com"
                required
              />
            </div>

            <div className="d-grid gap-3">
              <button type="submit" className="btn btn-info btn-lg fw-bold">
                Enviar instrucciones
              </button>

              <NavLink to="/Login" className="btn btn-outline-light">
                Volver al inicio de sesión
              </NavLink>
            </div>

            <p className="text-center text-secondary mt-4 mb-0 small">
              © 2026 Rick and Morty Explorer
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recover;
