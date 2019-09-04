import React from 'react';
import { ApolloProvider } from '@apollo/react-common';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import apolloClient from './configuration/apollo';
import reduxStore from './configuration/redux-store';
import history from './configuration/history';

import NavBar from './components/nav-bar';
import Body from './components/body';

const App = () => (
  <Provider store={reduxStore}>
    <Router history={history}>
      <ApolloProvider client={apolloClient}>
        <ApolloHooksProvider client={apolloClient}>
          <NavBar />
          <Body />
        </ApolloHooksProvider>
      </ApolloProvider>
    </Router>
  </Provider>
);

export default App;
