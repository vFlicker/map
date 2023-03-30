/* eslint-disable import/order */
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import { Map } from '~/widget/map';
import { ModuleController } from '~/widget/moduleController';
import { modalModel } from '~/entities/modal';
import { Module, moduleModel } from '~/entities/module';
import { fetchAllModules } from '~/shared/api-actions';
import { useAppDispatch, useAppSelector, useIsMobile } from '~/shared/hooks';
import { Modal } from '~/shared/ui/Modal';

import { withProviders } from './providers';
import { store } from './store';
import './styles/index.css';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllModules());
  }, [dispatch]);

  const isMobile = useIsMobile();

  const activeModuleId = useAppSelector(moduleModel.selectActiveModuleId);
  const isOpenModal = useAppSelector(modalModel.selectIsOpen);

  const handleCloseModule = () => {
    dispatch(modalModel.close());
  };

  const modal = (
    <Modal isOpen={isOpenModal} onClose={handleCloseModule}>
      <Module id={activeModuleId} />
    </Modal>
  );

  const moduleController = isMobile && !isOpenModal && <ModuleController />;

  return (
    <Provider store={store}>
      <Map />

      {modal}
      {moduleController}
    </Provider>
  );
}

export default withProviders(App);
