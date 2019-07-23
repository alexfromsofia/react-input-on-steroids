import React from 'react';
import { render } from 'react-dom';
import { StateProvider } from './lib/State';
import { InputOnSteroids } from './lib/InputOnSteroids';
import { mainReducer, initialState } from './lib/State/reducer';

const App = () => (
  <StateProvider initialState={initialState} reducer={mainReducer}>
    <InputOnSteroids />
  </StateProvider>
);

export default App;

render(<App />, document.getElementById('root'));
