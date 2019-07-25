import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import Container from '../../components/container'
import Error from '../../components/error'
import Form from '../../components/form'
import Input from '../../components/input'
import Loading from '../../components/loading'
import NotFound from '../../components/notFound'
import UserInfo from '../../components/userInfo'

const GET_USER = gql`
    query UserSearchQuery($user: String!) {
        user(login: $user) {
            avatarUrl
            bio
            name
            login
            url
            repositories(last: 100) {
                nodes {
                    description
                    name
                    url
                    primaryLanguage {
                        name
                    },
                    id
                }
            }
        }
    }
`

const UserSearch = () => {
    const [user, updateUser] = useState('')

    const handleFormSubmit = event => event.preventDefault()

    const handleInputChange = event => updateUser(event.target.value)

    return (
        <Container>
            <Form onSubmit={handleFormSubmit}>
                <Input onChange={handleInputChange} value={user} placeholder="Username to search..." />
                <Query
                    query={GET_USER}
                    variables={{
                        user
                    }}
                >
                    {({ error, loading, data }) => {
                        if (error) {
                            return <Error>{error && error.message}</Error>
                        }
                        if (loading) {
                            return <Loading />
                        }
                        if (data && !data.user) {
                            return <NotFound />
                        }
                        return data && data.user && <UserInfo {...data.user} />
                    }}
                </Query>
                {/* <QueryRenderer
                    environment={environment}
                    query={graphql`
                        query UserSearchQuery($user: String!) {
                            user(login: $user) {
                                avatarUrl
                                bio
                                name
                                login
                                url
                            }
                        }
                    `}
                    variables={{
                        user
                    }}
                    render={({ error, props }) => {
                        if (error) {
                            return <Error>{error}</Error>
                        }
                        if (!props) {
                            return <Loading/>
                        }
                        if (props && !props.user) {
                            return <NotFound/>
                        }
                        return props && props.user && <UserInfo { ...props.user }/>
                    }}
                /> */}
            </Form>
        </Container>
    )
}

export default UserSearch
