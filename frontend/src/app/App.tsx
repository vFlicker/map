/* eslint-disable import/order */
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import { Map } from '~/widget/map';
import { modalModel } from '~/entities/modal';
import { ModuleModal } from '~/entities/module';
import { fetchAllModules } from '~/shared/api-actions';
import { useAppDispatch, useAppSelector } from '~/shared/hooks';

import { withProviders } from './providers';
import { store } from './store';
import './styles/index.css';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllModules());
  }, [dispatch]);

  const isOpenModal = useAppSelector(modalModel.selectIsOpen);

  const handleCloseModule = () => {
    dispatch(modalModel.close());
  };

  return (
    <Provider store={store}>
      <Map />

      <ModuleModal isOpen={isOpenModal} onClose={handleCloseModule} />
    </Provider>
  );
}

export default withProviders(App);
