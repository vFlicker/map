/* eslint-disable import/order */
import { useEffect, useState } from 'react';
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

  const [error, setError] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

    if (userId === null) {
      setError(true);
    } else {
      dispatch(fetchAllModules(userId));
    }
  }, [dispatch]);

  const isOpenModal = useAppSelector(modalModel.selectIsOpen);

  const handleCloseModule = () => {
    dispatch(modalModel.close());
  };

  if (error === true) return <h1>Sorry, something went wrong.</h1>;

  return (
    <Provider store={store}>
      <Map />

      <ModuleModal isOpen={isOpenModal} onClose={handleCloseModule} />
    </Provider>
  );
}

export default withProviders(App);
