
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado. La autenticación aún no está configurada.');
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center">

        <div className="col-12 col-md-8 col-lg-5">

          <form
            onSubmit={handleSubmit}
            className="p-4 p-md-5 rounded-4 shadow-lg border"
            style={{
              backgroundColor: '#121d2b',
              borderColor: '#33445a'
            }}
          >

            {/* LOGO */}
            <div className="text-center mb-4">

              <div className="display-3 mb-3">
                🛸
              </div>

              <h1 className="h2 fw-bold text-light">
                ¡Bienvenido!
              </h1>

              <p className="text-secondary">
                Ingresa a tu portal intergaláctico
              </p>

            </div>

            {/* EMAIL */}
            <div className="mb-3">
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

            {/* PASSWORD */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-light">
                Contraseña
              </label>

              <input
                type="password"
                className="form-control form-control-lg"
                id="password"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>

            {/* RECORDAR */}
            <div className="d-flex justify-content-between align-items-center mb-4">

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="remember"
                />

                <label
                  className="form-check-label text-light"
                  htmlFor="remember"
                >
                  Recordarme
                </label>
              </div>

              <NavLink
                to="/Recover"
                className="text-info text-decoration-none"
              >
                ¿Olvidaste tu contraseña?
              </NavLink>

            </div>

            {/* BOTONES */}
            <div className="d-grid gap-3">

              <button
                type="submit"
                className="btn btn-info btn-lg fw-bold"
              >
                Iniciar sesión
              </button>

              <button
                type="button"
                className="btn btn-outline-light"
                onClick={() => navigate('/')}
              >
                Volver al inicio
              </button>

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

export default Login;
