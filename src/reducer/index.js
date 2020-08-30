// import { configureStore } from '@reduxjs/toolkit';
// import productsReducer from './productsReducer';
// import productReducer from './activeProductReducer';
// export default configureStore({
//   reducer: {
//     products: productsReducer,
//     activeProduct: productReducer
//   }
// });
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import productsReducer from './productsReducer';
import activeProductReducer from './activeProductReducer';
import activeUserReducer from './activeUserReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    activeProduct: activeProductReducer,
    activeUser: activeUserReducer,
    cartDetails: cartReducer
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
  const persistor = persistStore(store);
  return { store, persistor }
};
