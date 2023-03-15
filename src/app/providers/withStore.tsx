import { ComponentType } from 'react';
import { Provider } from 'react-redux';

// eslint-disable-next-line boundaries/element-types
import { store } from '../store';

export const withStore = (Component: ComponentType): ComponentType => {
  function WithStore(): JSX.Element {
    return (
      <Provider store={store}>
        <Component />
      </Provider>
    );
  }

  return WithStore;
};
