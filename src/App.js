import React from 'react';
import Navbar from './components/layout/Navbar'
import Main from './components/Main'
import { Provider } from 'react-redux'
import store from './Store'

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Navbar />
          <Main />
        </div>
    </Provider>
  );
}

export default App;
