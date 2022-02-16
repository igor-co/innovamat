import { Routes, Route } from 'react-router-dom';

import { GenericView } from 'ui/views/GenericView';
import { DetailsView } from 'ui/views/DetailsView';
import { Home } from 'ui/views/Home';

import { config } from 'conf';

export const App = () => {
  const { paths } = config;
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path={paths.TALLERES}
        element={<GenericView type={paths.TALLERES} />}
      />
      <Route
        path={paths.RINCONES}
        element={<GenericView type={paths.RINCONES} />}
      />
      <Route
        path={paths.AMBIENTES}
        element={<GenericView type={paths.AMBIENTES} />}
      />
      <Route
        path={paths.RUTINAS}
        element={<GenericView type={paths.RUTINAS} />}
      />
      <Route path={paths.RESOURCES} element={<DetailsView />}>
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
