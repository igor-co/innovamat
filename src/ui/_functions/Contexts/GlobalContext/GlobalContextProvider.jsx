import { useState } from 'react';

import { config } from 'conf';

import { GlobalContext } from './GlobalContext';

export const GlobalContextProvider = (props) => {
  const { paths } = config;

  const [currentViewType, setCurrentViewType] = useState(paths.TALLERES);
  const [filterBy, setFilterBy] = useState(() => ({
    realizable: null,
    curso: null,
    dinamicas: null,
    bloques: null,
  }));
  const [isSearching, setIsSearching] = useState(false);
  const [searchingPhrase, setSearchingPhrase] = useState('');

  const values = {
    currentViewType,
    filterBy,
    isSearching,
    searchingPhrase,
    setCurrentViewType,
    setFilterBy,
    setIsSearching,
    setSearchingPhrase,
  };

  return <GlobalContext.Provider value={values} {...props} />;
};
