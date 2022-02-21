import { useState } from 'react';

import { config } from 'conf';

import { GlobalContext } from './GlobalContext';

export const GlobalContextProvider = (props) => {
  const { paths } = config;

  const [currentViewType, setCurrentViewType] = useState(paths.TALLERES);
  const [searchingPhrase, setSearchingPhrase] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const values = {
    currentViewType,
    isSearching,
    searchingPhrase,
    setCurrentViewType,
    setIsSearching,
    setSearchingPhrase,
  };

  return <GlobalContext.Provider value={values} {...props} />;
};
