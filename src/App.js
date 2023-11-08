
import './App.css';
import AddToDo from './components/addToDo';
import ToDo from './components/toDo';
import Nav from './components/nav'
import './components/component.css'
import Done from './components/done';
import Example from './components/Example';

function App() {
  return (
    <div className="App">
        <AddToDo/>
        <ToDo/>
        <Done/>
        {/* <Example/> */}
      </div>
  );
}

export default App;
