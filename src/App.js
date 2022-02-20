import { Routes, Route } from 'react-router-dom';

import { config } from 'conf';

import { GenericView } from 'ui/views/GenericView';
import { DetailsView } from 'ui/views/DetailsView';
import { NotFoundView } from 'ui/views/NotFoundView';

import { ViewTypeProvider } from 'ui/_functions/Contexts/ViewTypeContext/ViewTypeProvider';

export const App = () => {
  const { paths } = config;
  /**TODO
    Make Talleres first page + implement 
   Fix header in mobile
   Search + results
   Filters menu panel + filtering
   *
   */

  return (
    <ViewTypeProvider>
      <Routes>
        <Route path='/' element={<GenericView />} />
        <Route path={paths.TALLERES} element={<GenericView />} />
        <Route path={paths.RINCONES} element={<GenericView />} />
        <Route path={paths.AMBIENTES} element={<GenericView />} />
        <Route path={paths.RUTINAS} element={<GenericView />} />
        <Route path={paths.SEARCH} element={<GenericView />} />
        <Route path={`${paths.RESOURCES}/:id`} element={<DetailsView />} />
        <Route path='*' element={<NotFoundView />} />
      </Routes>
    </ViewTypeProvider>
  );
};
