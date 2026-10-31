
import React from 'react'
import './Main.css'

const GridCell = ({ children }) => (
  <div className="grid-cell">{children}</div>
)

const GridExample = ({ title, description, children, id }) => (
  <section className="galaxy-section" id={id}>
    <div className="section-heading">
      <span className="section-kicker">MISSION MODULE</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    <div className="example-panel">
      {children}
    </div>
  </section>
)

export const Main = () => {
  return (
    <main className="galaxy-page">

      <nav className="galaxy-nav">
        <a className="brand" href="#top">
          <span className="brand-icon">✦</span>
          GALAXY<span className="brand-accent">EXPLORER</span>
        </a>

        <div className="nav-status">
          <span className="status-dot"></span>
          SISTEMA EN LÍNEA
        </div>
      </nav>

      <div className="container galaxy-container" id="top">

        <header className="hero">

          <div className="hero-copy">
            <span className="eyebrow">
              <span></span>
              GUÍA DE EXPLORACIÓN · BOOTSTRAP
            </span>

            <h1>
              Construye tu universo
              <span>columna por columna.</span>
            </h1>

            <p>
              Explora el sistema de cuadrículas de Bootstrap
              y descubre cómo organizar contenido en cualquier pantalla.
            </p>

            <a className="hero-button" href="#five-tiers">
              Iniciar exploración <span>↗</span>
            </a>
          </div>

          <div className="orbit-art">
            <div className="orbit orbit-a"></div>
            <div className="orbit orbit-b"></div>
            <div className="planet planet-main"></div>
            <div className="planet planet-small"></div>
            <span className="orbit-star star-one">✦</span>
            <span className="orbit-star star-two">✧</span>
            <span className="orbit-star star-three">·</span>
          </div>

          <div className="hero-bottom">
            <span><b>12</b> COLUMNAS POR FILA</span>
            <span><b>6</b> PUNTOS DE QUIEBRE</span>
            <span><b>∞</b> POSIBILIDADES</span>
          </div>

        </header>

        <div className="intro-strip">
          <span className="intro-icon">⌘</span>
          <p>
            En cada módulo encontrarás ejemplos prácticos.
            Las tarjetas representan las columnas de la cuadrícula.
          </p>
        </div>

        <GridExample
          id="five-tiers"
          title="Cinco niveles de cuadrícula"
          description="Cada punto de quiebre adapta la distribución a distintos tamaños de pantalla."
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="mb-4">
              <div className="example-label">
                NIVEL RESPONSIVE {item}
              </div>

              <div className="row g-2 text-center">
                {[1, 2, 3].map((n) => (
                  <div className="col-4" key={n}>
                    <GridCell>col-4</GridCell>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </GridExample>

        <GridExample
          title="Tres columnas iguales"
          description="Las columnas ocupan el mismo espacio y se organizan en tres partes iguales."
        >
          <div className="row g-3 text-center">
            {[1, 2, 3].map((item) => (
              <div className="col-md-4" key={item}>
                <GridCell>4 columnas</GridCell>
              </div>
            ))}
          </div>
        </GridExample>

        <GridExample
          title="Columnas con row-cols"
          description="Permite definir automáticamente cuántas columnas aparecen por fila."
        >
          <div className="row row-cols-1 row-cols-md-3 g-3 text-center">
            {[1, 2, 3].map((item) => (
              <div className="col" key={item}>
                <GridCell>Elemento {item}</GridCell>
              </div>
            ))}
          </div>
        </GridExample>

        <GridExample
          title="Tres columnas desiguales"
          description="Combina diferentes anchos. Las columnas deben sumar doce."
        >
          <div className="row g-3 text-center">
            <div className="col-md-3">
              <GridCell>3 / 12</GridCell>
            </div>

            <div className="col-md-6">
              <GridCell>6 / 12</GridCell>
            </div>

            <div className="col-md-3">
              <GridCell>3 / 12</GridCell>
            </div>
          </div>
        </GridExample>

        <GridExample
          title="Dos columnas"
          description="Una columna puede ocupar más espacio que la otra."
        >
          <div className="row g-3 text-center">
            <div className="col-md-8">
              <GridCell>Columna principal · 8</GridCell>
            </div>

            <div className="col-md-4">
              <GridCell>Columna secundaria · 4</GridCell>
            </div>
          </div>
        </GridExample>

        <GridExample
          title="Ancho completo"
          description="Los elementos pueden ocupar todo el ancho disponible."
        >
          <div className="row">
            <div className="col-12">
              <GridCell>Contenido de ancho completo · col-12</GridCell>
            </div>
          </div>
        </GridExample>

        <GridExample
          title="Columnas anidadas"
          description="Puedes colocar una nueva fila dentro de una columna."
        >
          <div className="row g-3 text-center">

            <div className="col-md-8">
              <div className="grid-cell nested-parent">
                Columna principal · 8

                <div className="row g-2 mt-2">
                  <div className="col-md-6">
                    <GridCell>Subcolumna · 6</GridCell>
                  </div>

                  <div className="col-md-6">
                    <GridCell>Subcolumna · 6</GridCell>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <GridCell>Columna lateral · 4</GridCell>
            </div>

          </div>
        </GridExample>

        <GridExample
          title="Diseño mixto: móvil y escritorio"
          description="Las columnas pueden cambiar de proporción según el tamaño de pantalla."
        >
          <div className="row g-3 text-center">
            <div className="col-md-8">
              <GridCell>col-md-8</GridCell>
            </div>

            <div className="col-6 col-md-4">
              <GridCell>col-6 col-md-4</GridCell>
            </div>
          </div>

          <div className="row g-3 text-center mt-1">
            {[1, 2, 3].map((item) => (
              <div className="col-6 col-md-4" key={item}>
                <GridCell>col-6 col-md-4</GridCell>
              </div>
            ))}
          </div>
        </GridExample>

        <GridExample
          title="Espaciado entre columnas"
          description="Los gutters controlan el espacio horizontal y vertical."
        >
          <div className="example-label">SEPARACIÓN AMPLIA · G-4</div>

          <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div className="col" key={item}>
                <GridCell>Columna {item}</GridCell>
              </div>
            ))}
          </div>

          <div className="example-label mt-4">
            SEPARACIÓN COMPACTA · G-2
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-2 text-center">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div className="col" key={item}>
                <GridCell>Columna {item}</GridCell>
              </div>
            ))}
          </div>
        </GridExample>

        <GridExample
          id="containers"
          title="Contenedores"
          description="Los contenedores centran el contenido y ajustan su ancho según el dispositivo."
        >
          {[
            'container',
            'container-sm',
            'container-md',
            'container-lg',
            'container-xl',
            'container-xxl',
            'container-fluid'
          ].map((name) => (
            <div className="container-demo" key={name}>
              <div className="container-demo-info">
                <code>{name}</code>
              </div>

              <div className={`container-visual ${name}`}>
                <span></span>
              </div>
            </div>
          ))}
        </GridExample>

        <footer className="galaxy-footer">
          <div className="footer-mark">✦</div>
          <p>FIN DE LA TRANSMISIÓN</p>
          <span>Exploración de Bootstrap Grid · Galaxy Explorer</span>
          <a href="#top">Volver al inicio ↑</a>
        </footer>

      </div>
    </main>
  )
}

export default Main
