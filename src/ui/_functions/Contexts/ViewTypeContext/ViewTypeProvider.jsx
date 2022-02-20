import { useState } from 'react';

import { config } from 'conf';

import { ViewTypeContext } from './ViewTypeContext';

export const ViewTypeProvider = (props) => {
  const { paths } = config;

  const [currentViewType, setCurrentViewType] = useState(paths.TALLERES);
  const values = { currentViewType, setCurrentViewType };

  return <ViewTypeContext.Provider value={values} {...props} />;
};
