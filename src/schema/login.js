import { gql } from '@apollo/client';

export const GET_USERS = gql`
    query {
        users {
            username
        }
    }`;

export const CREATE_USER = gql`  
  mutation($username: String!, $password: String!) {
      addUser(username: $username, password: $password) {
          username
      }
  }`;
