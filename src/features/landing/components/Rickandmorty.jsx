
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Rickandmorty.css';

const Rickandmorty = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const getCharacters = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await axios.get(
          'https://rickandmortyapi.com/api/character/',
          {
            params: {
              name: search,
              page: page
            },
            signal: controller.signal
          }
        );

        setCharacters(response.data.results);
      } catch (err) {
        if (err.name === 'CanceledError') return;

        setCharacters([]);

        if (err.response?.status === 404) {
          setError('No se encontraron personajes.');
        } else {
          setError('Ocurrió un error al cargar los personajes.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    const timer = setTimeout(() => {
      getCharacters();
    }, 350);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [search, page]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <section className="rick-section" id="characters">

      <div className="rick-header">
        <p className="rick-subtitle">BASE DE DATOS GALÁCTICA</p>

        <h1>Rick and Morty Explorer</h1>

        <p className="rick-description">
          Explora y descubre los personajes del universo.
        </p>
      </div>

      <div className="rick-search">
        <input
          type="search"
          className="form-control form-control-lg"
          placeholder="Buscar personaje por nombre..."
          value={search}
          onChange={handleSearch}
        />
      </div>

      {loading && (
        <div className="rick-message">
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p>Buscando personajes...</p>
        </div>
      )}

      {!loading && error && (
        <p className="rick-error">{error}</p>
      )}

      {!loading && !error && (
        <>
          <div className="rick-grid">
            {characters.map((character) => (
              <article className="rick-card" key={character.id}>

                <img
                  src={character.image}
                  alt={character.name}
                  className="rick-image"
                  loading="lazy"
                />

                <div className="rick-card-body">
                  <h2>{character.name}</h2>

                  <p>
                    <strong>Estado:</strong> {character.status}
                  </p>

                  <p>
                    <strong>Especie:</strong> {character.species}
                  </p>

                  <p>
                    <strong>Género:</strong> {character.gender}
                  </p>

                  <p>
                    <strong>Origen:</strong> {character.origin.name}
                  </p>
                </div>

              </article>
            ))}
          </div>

          <div className="rick-pagination">

            <button
              className="btn btn-outline-info"
              onClick={() => setPage((prev) => prev - 1)}
              disabled={page === 1}
            >
              Anterior
            </button>

            <span>Página {page}</span>

            <button
              className="btn btn-outline-info"
              onClick={() => setPage((prev) => prev + 1)}
              disabled={characters.length < 20}
            >
              Siguiente
            </button>

          </div>
        </>
      )}

    </section>
  );
};

export default Rickandmorty;
