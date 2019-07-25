import ApolloClient from 'apollo-boost'

const GITHUB_ENDPOINT = 'https://api.github.com/graphql'
const GITHUB_TOKEN = 'SOME_TOKEN'

const client = new ApolloClient({
    uri: GITHUB_ENDPOINT,
    headers: {
        authorization: `bearer ${GITHUB_TOKEN}`
    }
})

export { client }
