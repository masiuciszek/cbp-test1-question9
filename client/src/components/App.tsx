import { useQuery, gql } from "@apollo/client"
import React from "react"
import { Layout } from "./@layout"

const QUERY = gql`
  {
    teams {
      name
    }
  }
`

interface Data {
  teams: Array<{ __typename: string; name: string }>
}

function App() {
  const { loading, error, data } = useQuery<Data>(QUERY)
  if (loading) return <p>...loading</p>
  if (error) return <p>...Error</p>

  return (
    <Layout>
      <div className="App">
        <h1>helsasdalo</h1>
        <p>hello</p>
        <h4>LEGIA</h4>
        {data?.teams.map(d => (
          <h1>{d.name}</h1>
        ))}
      </div>
    </Layout>
  )
}

export default App
