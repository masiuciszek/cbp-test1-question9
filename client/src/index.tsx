import React from "react"
import ReactDOM from "react-dom"
import App from "./Components/App"
import * as serviceWorker from "./serviceWorker"
import { ApolloProvider } from "@apollo/client"
import { client } from "./ClientGql"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
