import React, { Suspense } from "react"
import { Route, Switch } from "react-router-dom"

const HomePage = React.lazy(() => import("../Pages/HomePage"))
const LoginPage = React.lazy(() => import("../Pages/LoginPage"))

const Routes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Suspense>
  )
}
export default Routes
