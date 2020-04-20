import { ApolloServer } from 'apollo-server'
import schema from './graphql/schema'
import resolvers from './graphql/resolvers'
import models from './models/index'
import 'dotenv/config'

export const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: {
        models,
        SECRET: process.env.SECRET,
        user: ({req}) => {
            
        }
    }
})

