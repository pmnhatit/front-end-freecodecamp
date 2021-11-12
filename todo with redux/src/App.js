import logo from './logo.svg';
import './App.css';
import {store} from './store';
import { Provider } from 'react-redux'
import {TodoText} from './containers/TodoText';
import {TodoImage} from './containers/TodoImage';
import {TodoQuestion} from './containers/TodoQuestion';
import {RoleButton} from './containers/RoleButton';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RoleButton/>
        <TodoText/>
        <TodoImage/>
        <TodoQuestion/>
      </Provider>
    </div>
  );
}

export default App;
