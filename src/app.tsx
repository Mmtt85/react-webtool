import React from 'react';
import { ApolloProvider } from '@apollo/react-common';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';

import apolloClient from 'src/configurations/apollo';
import reduxStore from 'src/configurations/redux-store';
import history from 'src/configurations/history';

import Index from 'src/components';

export default function App() {
  return (
    <Provider store={reduxStore}>
      <Router history={history}>
        <ApolloProvider client={apolloClient}>
          <ApolloHooksProvider client={apolloClient}>
            <Index />
          </ApolloHooksProvider>
        </ApolloProvider>
      </Router>
    </Provider>
  );
}
