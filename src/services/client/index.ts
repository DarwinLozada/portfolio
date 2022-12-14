import { ApolloClient, InMemoryCache } from '@apollo/client'

const graphqlServerURL = import.meta.env.GRAPHCMS_URL

if (!graphqlServerURL) {
  throw new Error(
    'Error reading GraphQL Server URL | Not Found as an environment variable'
  )
}

const client = new ApolloClient({
  uri: graphqlServerURL,
  cache: new InMemoryCache()
})

export default client
