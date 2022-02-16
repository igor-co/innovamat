import { NavLink } from 'react-router-dom';

import styles from './Home.module.scss';

import { config } from 'conf';

export const Home = () => {
  const { paths, messages } = config;

  return (
    <>
      <main>
        <h2>Pagina de inicio</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </main>
      <nav style={{ display: 'flex', flexDirection: 'column' }}>
        <NavLink to={`/${paths.TALLERES}`}>{messages['talleres']}</NavLink>
        <NavLink to={`/${paths.RINCONES}`}>{messages['rincones']}</NavLink>
        <NavLink to={`/${paths.AMBIENTES}`}>{messages['ambientes']}</NavLink>
        <NavLink to={`/${paths.RUTINAS}`}>{messages['rutinas']}</NavLink>
      </nav>
    </>
  );
};
