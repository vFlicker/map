/* eslint-disable import/order */
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import { Map } from '~/widget/map';
import { Module, moduleModel } from '~/entities/module';
import { fetchAllModules } from '~/shared/api-actions';
import { useAppDispatch, useAppSelector } from '~/shared/hooks';
import { Modal } from '~/shared/ui/Modal';

import { withProviders } from './providers';
import { store } from './store';
import './styles/index.css';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllModules());
  }, [dispatch]);

  const activeModuleId = useAppSelector(moduleModel.selectActiveModuleId);

  const handleCloseModule = () => {
    dispatch(moduleModel.changeActiveModuleId(''));
  };

  const isModalOpen = Boolean(activeModuleId);

  return (
    <Provider store={store}>
      <Map />

      <Modal isOpen={isModalOpen} onClose={handleCloseModule}>
        <Module id={activeModuleId} />
      </Modal>
    </Provider>
  );
}

export default withProviders(App);
