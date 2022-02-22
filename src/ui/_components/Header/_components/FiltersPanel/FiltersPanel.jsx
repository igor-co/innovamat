import { useState, useContext } from 'react';

import styles from './FiltersPanel.module.scss';

import { config } from 'conf';

import { Button } from 'ui/_components/Button';
import { ChevronMiniIcon } from 'assets/icons/ChevronMiniIcon';

import { GlobalContext } from 'ui/_functions/Contexts/GlobalContext/GlobalContext';

export const FiltersPanel = () => {
  const { filterBy, setFilterBy } = useContext(GlobalContext);

  const [isSectionOpened, setIsSectionOpened] = useState({
    realizable: true,
    curso: true,
    dinamicas: true,
    bloques: true,
  });

  const { messages } = config;

  return (
    <div className={styles.filtersWrapper}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3
            className={styles.title}
            onClick={() => {
              setIsSectionOpened((prev) => ({
                ...prev,
                realizable: !prev.realizable,
              }));
            }}
          >
            {messages['sectionRealizableEnTitle']}
            <ChevronMiniIcon isOpened={isSectionOpened.realizable} />
          </h3>
          {isSectionOpened.realizable && (
            <div className={styles.buttonsWrapper_grid_2}>
              <Button
                isDisabled
                onClick={() => {}}
                label={messages['escuela']}
              />
              <Button isDisabled onClick={() => {}} label={messages['casa']} />
            </div>
          )}
        </div>

        <div className={styles.section}>
          <h3
            className={styles.title}
            onClick={() => {
              setIsSectionOpened((prev) => ({
                ...prev,
                curso: !prev.curso,
              }));
            }}
          >
            {messages['sectionCursoTitle']}
            <ChevronMiniIcon isOpened={isSectionOpened.curso} />
          </h3>
          {isSectionOpened.curso && (
            <div className={styles.buttonsWrapper_grid_6}>
              <Button isDisabled onClick={() => {}} label='P3' />
              <Button isDisabled onClick={() => {}} label='P4' />
              <Button isDisabled onClick={() => {}} label='P5' />
              <Button isDisabled onClick={() => {}} label='1r' />
              <Button isDisabled onClick={() => {}} isActive label='2n' />
              <Button isDisabled onClick={() => {}} label='3r' />
              <Button isDisabled onClick={() => {}} label='4t' />
              <Button isDisabled onClick={() => {}} label='5è' />
              <Button isDisabled onClick={() => {}} label='6è' />
            </div>
          )}
        </div>

        <div className={styles.section}>
          <h3
            className={styles.title}
            onClick={() => {
              setIsSectionOpened((prev) => ({
                ...prev,
                dinamicas: !prev.dinamicas,
              }));
            }}
          >
            {messages['sectionDinamicasTitle']}
            <ChevronMiniIcon isOpened={isSectionOpened.dinamicas} />
          </h3>
          {isSectionOpened.dinamicas && (
            <div className={styles.buttonsWrapper_grid_2}>
              <Button
                isActive={filterBy['dinamicas'] === 'talleres'}
                onClick={() => {
                  setFilterBy((prev) => ({ ...prev, dinamicas: 'talleres' }));
                }}
                label={messages['talleres']}
              />
              <Button
                isActive={filterBy['dinamicas'] === 'rincones'}
                onClick={() => {
                  setFilterBy((prev) => ({ ...prev, dinamicas: 'rincones' }));
                }}
                label={messages['rincones']}
              />
              <Button
                isActive={filterBy['dinamicas'] === 'ambientes'}
                onClick={() => {
                  setFilterBy((prev) => ({ ...prev, dinamicas: 'ambientes' }));
                }}
                label={messages['ambientes']}
              />
              <Button
                isActive={filterBy['dinamicas'] === 'rutinas'}
                onClick={() => {
                  setFilterBy((prev) => ({ ...prev, dinamicas: 'rutinas' }));
                }}
                label={messages['rutinas']}
              />
            </div>
          )}
        </div>

        <div className={styles.section}>
          <h3
            className={`${styles.title} ${
              !isSectionOpened.bloques ? styles.isLastClosed : ''
            }`}
            onClick={() => {
              setIsSectionOpened((prev) => ({
                ...prev,
                bloques: !prev.bloques,
              }));
            }}
          >
            {messages['sectionBloquesTitle']}
            <ChevronMiniIcon isOpened={isSectionOpened.bloques} />
          </h3>
          {isSectionOpened.bloques && (
            <div className={styles.buttonsWrapper_grid_2}>
              <Button
                isDisabled
                onClick={() => {}}
                label={messages['numeracion']}
              />
              <Button
                isDisabled
                onClick={() => {}}
                label={messages['calculo']}
              />
              <Button
                isDisabled
                onClick={() => {}}
                label={messages['medidas']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
