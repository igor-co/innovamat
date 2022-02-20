import { useState } from 'react';

import { config } from 'conf';

import { ViewTypeContext } from './ViewTypeContext';

export const ViewTypeProvider = (props) => {
  const { paths } = config;

  const [activeItem, setActiveItem] = useState(paths.TALLERES);
  const values = { activeItem, setActiveItem };

  return <ViewTypeContext.Provider value={values} {...props} />;
};
