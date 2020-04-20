import { gql } from 'apollo-server'

export default gql`

type User{
    _id: ID!
    username: String!
    password: String!
}


type Query {
    allUsers: [User]!
    getUser(_id: ID!): User!
}

type Mutation {
    createUser(username: String!, password: String!): User!
}

`