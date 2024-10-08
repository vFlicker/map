/* eslint-disable import/order */
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import { Map } from '~/widget/map';
import { modalModel } from '~/entities/modal';
import { ModuleModal } from '~/entities/module';
import { fetchAllModules, fetchAllModulesById } from '~/shared/api-actions';
import { useAppDispatch, useAppSelector } from '~/shared/hooks';

import { withProviders } from './providers';
import { store } from './store';
import './styles/index.css';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    if (userId === null) {
      dispatch(fetchAllModules());
    } else {
      dispatch(fetchAllModulesById(userId));
    }
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
