import './App.css';
import Users from './Users';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Users />
      </div>
    </Provider>
  );
}

export default App;
