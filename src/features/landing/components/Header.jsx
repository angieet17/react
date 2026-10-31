
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">

          <NavLink
            to="/"
            className="navbar-brand site-brand"
            onClick={closeMenu}
          >
            <span className="brand-mark">🛸</span>
            Rick <span className="brand-accent">&</span> Morty
          </NavLink>

          {/* Botón visible solo en móviles */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Abrir menú"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú de navegación */}
          <div
            className={`navbar-collapse ${
              open ? 'd-block' : 'd-none'
            } d-lg-flex`}
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 flex-column flex-lg-row align-items-lg-center">

              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/Login"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/Props"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Props
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/randm"
                  className="nav-link nav-link-featured"
                  onClick={closeMenu}
                >
                  Rick and Morty
                </NavLink>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;
