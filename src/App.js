import './App.css';
import Users from './Users';
import store from './store';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container>
          <Users />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
