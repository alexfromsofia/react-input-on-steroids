import React from 'react';
import { StateProvider } from './State';
import { InputOnSteroids } from './InputOnSteroids';
import { mainReducer, initialState } from './State/reducer';

const App = () => (
  <StateProvider initialState={initialState} reducer={mainReducer}>
    <InputOnSteroids />
  </StateProvider>
);

export default App;
