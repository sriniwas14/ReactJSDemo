import './App.css';
import Users from './Users';
import UserSingle from './UserSingle';
import store from './store';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container>
        <Router>
          <Switch>
            <Route exact path="/">
              <Users />
            </Route>
            <Route exact path="/users/:id">
              <UserSingle />
            </Route>
          </Switch>
        </Router>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
