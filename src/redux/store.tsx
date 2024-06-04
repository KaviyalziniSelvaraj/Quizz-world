// store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ansreducer, countreducer } from './reducer';

export const rootreducer=combineReducers({
  ansredux:ansreducer,
  countredux:countreducer
})
  export const store = configureStore({reducer:rootreducer});
  export default store;
