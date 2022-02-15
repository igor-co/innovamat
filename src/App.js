import { Routes, Route, Link } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='talleres' element={<Page type='talleres' />} />
      <Route path='rincones' element={<Page type='rincones' />} />
      <Route path='ambientes' element={<Page type='ambientes' />} />
      <Route path='rutinas' element={<Page type='rutinas' />} />
    </Routes>
  );
};

const Home = () => {
  return (
    <>
      <main>
        <h2>Pagina de inicio</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </main>
      <nav style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to='/talleres'>Talleres</Link>
        <Link to='/rincones'>Rincones</Link>
        <Link to='/ambientes'>Ambientes</Link>
        <Link to='/rutinas'>Rutinas</Link>
      </nav>
    </>
  );
};

function Page({ type }) {
  return (
    <>
      <main>
        <h2>{type}</h2>
        <p>
          Culpa, quasi. Soluta, porro? Minus perferendis deleniti repellendus id
          sint
        </p>
      </main>
      <nav>
        <Link to='/'>Inicio</Link>
      </nav>
    </>
  );
}
