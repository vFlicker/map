declare type AppDispatch = typeof import('./store').store.dispatch;
declare type DispatchFunc = () => AppDispatch;
declare type RootState = ReturnType<
  typeof import('./store/rootReducer').rootReducer
>;
