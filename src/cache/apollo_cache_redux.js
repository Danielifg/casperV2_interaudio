
import gql from 'graphql-tag';
import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import ApolloClient from "apollo-client"
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import  { withClientState } from 'apollo-link-state'
import { ApolloLink } from 'apollo-link'
import { onError } from "apollo-link-error";
import 'cross-fetch/polyfill';
import thunk from 'redux-thunk'
import graphql from 'gatsby'
import { execute, makePromise } from 'apollo-link'

/*

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const CMS_URI ='https://api-useast.graphcms.com/v1/cjo0xp1m93ben01dgp41d2fw1/master'

const TEST_QUERY = gql` query content($first: Int, $skip: Int, $where: AssetWhereInput, $orderBy: AssetOrderByInput) {
    assets: assetsConnection(first: $first, skip: $skip, where: $where, orderBy: $orderBy) {
      edges {
        node {
          createdAt
          updatedAt
          width
          status
          handle
          fileName
          height
          mimeType
          size
          id
        }
      }
    }
  }
`

export const httpLink = new HttpLink({
  uri: CMS_URI,
  headers: {
    ContentType: `application/json`,
    AccessControlAllowOrigin: `*`,
    Accept:`application/json`
  }
});

*/

/*
const operation = {query:TEST_QUERY};

export const test_CMS = () =>
    makePromise(execute(httpLink, operation))
            .then(data => console.log(data))
            .catch(error => console.log(error));

*/

/* ******** ** Graphql Error-Debug ** **********
const errorLink = onError(({ graphQLErrors,  etworkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});
*/
