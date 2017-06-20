const { buildSchema } = require('graphql')
const graphqlHTTP = require('express-graphql')

const express = require('express')
const app = express()

const APP_PORT = 3008

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const root = {
  hello: _ => 'Hello world!'
}

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}) )

app.listen(APP_PORT, _=> console.log(`Application (feat. GraphQL) running on port: ${APP_PORT}`) )

