import { configureStore } from '@reduxjs/toolkit';
import { stateReducer, loadingReducer } from './reducer';

const rootReducer = {
  data: stateReducer,
  loading: loadingReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
