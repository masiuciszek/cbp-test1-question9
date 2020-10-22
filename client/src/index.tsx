import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import {
  gql,
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  // uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
})

client
  .query({
    query: gql`
      {
        getUsers {
          id
          firstName
        }
      }
    `,
  })
  .then(result => console.log(result))

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
