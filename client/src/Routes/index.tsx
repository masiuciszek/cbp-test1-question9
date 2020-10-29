import React, { Suspense } from "react"
import { Route, Switch } from "react-router-dom"

const HomePage = React.lazy(() => import("../Pages/HomePage"))
const LoginPage = React.lazy(() => import("../Pages/LoginPage"))
const RegisterPage = React.lazy(() => import("../Pages/RegisterPage"))

const Routes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </Suspense>
  )
}
export default Routes
