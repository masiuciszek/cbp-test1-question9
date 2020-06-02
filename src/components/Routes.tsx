import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
const HomePage = React.lazy(() => import('../pages/Home'));
const AboutPage = React.lazy(() => import('../pages/About'));

interface Props {}

const Routes: React.FC<Props> = () => {
  return (
    <React.Suspense fallback={<h3>...Loading</h3>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </React.Suspense>
  );
};
export default Routes;
