import logo from './logo.svg';
import './App.css';
// import {ListText} from './components/TodoText/ListText';
// import {ListItemTodoImage} from './components/TodoImage/ListItemTodoImage';
// import {ListTodoQuestion} from './components/TodoQuestion/ListTodoQuestion';
import {MainScreen} from './components/MainScreen/MainScreen';

function App() {
  return (
    <div className="App">
      {/* <ListText/>
      <ListItemTodoImage/>
      <ListTodoQuestion/> */}
      <MainScreen/>
    </div>
  );
}

export default App;
