import gql from 'graphql-tag';

export const GET_USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      name
    }
  }
`;

export const GET_USERS = gql`
  query Users {
    users {
      id
      name
    }
  }
`;
