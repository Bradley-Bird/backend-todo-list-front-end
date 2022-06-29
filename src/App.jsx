import Main from './views/Main';
import { Route, Switch } from 'react-router-dom';
import Auth from './views/Auth';

export default function App() {
  return (
    <Switch>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  );
}
