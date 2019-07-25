import { Environment, Network, RecordSource, Store } from 'relay-runtime'

const GITHUB_ENDPOINT = 'https://api.github.com/graphql'
const GITHUB_TOKEN = 'SOME_TOKEN'

const store = new Store(new RecordSource())
const network = Network.create((operation, variables) => {
    return fetch(GITHUB_ENDPOINT, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `bearer ${GITHUB_TOKEN}`
        },
        body: JSON.stringify({
            query: operation.text,
            variables
        })
    }).then(response => response.json())
})

const environment = new Environment({
    network,
    store
})

export { environment }
