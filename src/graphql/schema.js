import { gql } from 'apollo-server'

export default gql`

type Query {
    ping: String!
}

type Mutation {
    message: String!
}

`