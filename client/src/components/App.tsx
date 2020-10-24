import React from "react"
import { Layout } from "./Layout"
import { Page } from "./Styled"
import { Users } from "./users"

function App() {
  return (
    <Layout>
      <Page>
        <Users />
      </Page>
    </Layout>
  )
}

export default App
