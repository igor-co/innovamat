import { Routes, Route } from 'react-router-dom';

import { GenericView } from 'ui/views/GenericView';
import { DetailsView } from 'ui/views/DetailsView';
import { Home } from 'ui/views/Home';

import { config } from 'conf';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path={config.paths.TALLERES}
        element={<GenericView type={config.paths.TALLERES} />}
      />
      <Route
        path={config.paths.RINCONES}
        element={<GenericView type={config.paths.RINCONES} />}
      />
      <Route
        path={config.paths.AMBIENTES}
        element={<GenericView type={config.paths.AMBIENTES} />}
      />
      <Route
        path={config.paths.RUTINAS}
        element={<GenericView type={config.paths.RUTINAS} />}
      />
      <Route path={config.paths.RESOURCES} element={<DetailsView />}>
        <Route path=':id' element={<DetailsView />} />
      </Route>
      <Route
        path='*'
        element={
          <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};
