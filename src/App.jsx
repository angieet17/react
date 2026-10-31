
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './features/landing/components/Header';
import { Footer } from './features/landing/components/Footer';
import { Main } from './features/landing/components/Main';

const Login = lazy(() =>
  import('./features/auth/components/Login').then(module => ({
    default: module.Login
  }))
);

const Recover = lazy(() =>
  import('./features/auth/components/Recover').then(module => ({
    default: module.Recover
  }))
);

const Props = lazy(() =>
  import('./features/landing/components/Props').then(module => ({
    default: module.Props
  }))
);

const Rickandmorty = lazy(() =>
  import('./features/landing/components/Rickandmorty')
);

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="flex-grow-1">
        <Suspense fallback={
          <div className="text-center text-light py-5">
            Cargando página...
          </div>
        }>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Recover" element={<Recover />} />
            <Route path="/Props" element={<Props />} />
            <Route path="/randm" element={<Rickandmorty />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
