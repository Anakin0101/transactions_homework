/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import NavigationRouter from './app/navigation/navigation';
import {TProvider, TContext} from './app/context/TransactionsContext';
const App = () => {
  console.log(111);
  return (
    <>
      <TProvider>
        <TContext.Consumer>{() => <NavigationRouter />}</TContext.Consumer>
      </TProvider>
    </>
  );
};

export default App;
