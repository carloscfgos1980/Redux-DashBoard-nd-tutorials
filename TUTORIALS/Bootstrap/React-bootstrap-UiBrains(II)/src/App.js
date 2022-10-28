import './App.css';
import Counter from './components/Counter';
import NavBarComp from './components/NavBarComp';
import Register from './components/Register';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <NavBarComp />
      <Counter />
      <Register />
      <UserList />
    </div>
  );
}

export default App;
