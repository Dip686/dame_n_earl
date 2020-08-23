// import { configureStore } from '@reduxjs/toolkit';
// import productsReducer from './productsReducer';
// import productReducer from './activeProductReducer';
// export default configureStore({
//   reducer: {
//     products: productsReducer,
//     activeProduct: productReducer
//   }
// });
import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productsReducer from './productsReducer';
import productReducer from './activeProductReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    activeProduct: productReducer
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
};
