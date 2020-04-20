import { gql } from 'apollo-server'

export default gql`
scalar Date

type User{
    _id: ID!
    username: String!
    password: String!
    fullname: String!
    email: String!
    thumbnail: String
}

type Post {
    _id: ID!
    by: User!
    desc: String
    photo: String!
    likeBy: [User]
    comments: [User]
    createdAt: Date
}

input iBy{
    username: String!
    thumbnail: String
}

input iPost{
    by: iBy
    desc: String
    photo: String!
}

type Error {
    path: String!
    message: String!
}

type Response {
    success: Boolean!
    token: String
    errors: [Error]
}

type Query {
    allUsers: [User]!
    getUser(_id: ID!): User!

    getPost(_id: ID!): Post!
}

type Mutation {
    login(username: String!, password: String!): Response!
    createUser(username: String!, password: String!, fullname: String!, email: String!): Response!

    createPost(post: iPost): Post!
}

`