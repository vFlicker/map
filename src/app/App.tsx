/* eslint-disable import/order */
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import { Map } from '~/widget/map';
import { ModuleModal } from '~/features/ModuleModal';
import { fetchAllModules } from '~/shared/api-actions';
import { useAppDispatch } from '~/shared/hooks';

import { withProviders } from './providers';
import { store } from './store';
import './styles/index.css';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllModules());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <Map />

      <ModuleModal />
    </Provider>
  );
}

export default withProviders(App);
