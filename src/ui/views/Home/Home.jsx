import { NavLink } from 'react-router-dom';

import styles from './Home.module.scss';

import { config } from 'conf';

export const Home = () => {
  return (
    <>
      <main>
        <h2>Pagina de inicio</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </main>
      <nav style={{ display: 'flex', flexDirection: 'column' }}>
        <NavLink to={`/${config.paths.TALLERES}`}>Talleres</NavLink>
        <NavLink to={`/${config.paths.RINCONES}`}>Rincones</NavLink>
        <NavLink to={`/${config.paths.AMBIENTES}`}>Ambientes</NavLink>
        <NavLink to={`/${config.paths.RUTINAS}`}>Rutinas</NavLink>
      </nav>
    </>
  );
};
