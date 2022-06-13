import { GraphQLClient } from 'graphql-request';

const commercetools = async (query, variables) => {
  const endpoint = 'https://api.europe-west1.gcp.commercetools.com/james-test-project/graphql/'
  const token = 'deDAOVq_7o2Hls8depEIWdOXe8o-WX9U'
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })
  return await graphQLClient.request(query, variables)
}
export default commercetools