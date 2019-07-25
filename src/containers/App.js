import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { client } from '../apollo'

import UserSearch from '../pages/user/UserSearch'

const App = () => (
    <ApolloProvider client={ client }>
        <UserSearch/>
    </ApolloProvider>
)

export default App
