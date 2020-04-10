import { ApolloServer } from 'apollo-server'
import schema from './graphql/schema.js'
import resolvers from './graphql/resolvers'

export const server = new ApolloServer({
    typeDefs: schema,
    resolvers
})