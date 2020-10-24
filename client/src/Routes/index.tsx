import React, { Suspense } from "react"
import { Route, Switch } from "react-router-dom"

const HomePage = React.lazy(() => import("../Pages/HomePage"))

const Routes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Suspense>
  )
}
export default Routes
