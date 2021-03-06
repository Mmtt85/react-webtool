import * as React from 'react';
import { ApolloProvider } from '@apollo/react-common';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import apolloClient from 'src/configurations/apollo';
import reduxStore from 'src/configurations/redux-store';
import history from 'src/configurations/history';

import Root from 'src/components';

import './app.scss';

export default function App() {
  return (
    <Provider store={reduxStore}>
      <Router history={history}>
        <ApolloProvider client={apolloClient}>
          <ApolloHooksProvider client={apolloClient}>
            <Root />
          </ApolloHooksProvider>
        </ApolloProvider>
      </Router>
    </Provider>
  );
}
