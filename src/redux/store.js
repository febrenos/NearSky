// store.js
// import { configureStore } from '@reduxjs/toolkit';
// import visibilityReducer from './visibilityReducer';

// const store = configureStore({
//   reducer: {
//     visibility: visibilityReducer,
//   },
//   // Outras configurações...
// });

// export default store;

import {createStore} from 'redux'

import rootReducer from './root-reducer'

const store = createStore(rootReducer);

export default store;
