
import {
  ApolloClient,
  InMemoryCache,
  gql,
} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

export const GET_NOTES = gql`
  query notes {
    notes {
      title
      body
    }
  }
`;

