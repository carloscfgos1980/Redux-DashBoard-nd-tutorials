import './App.css';
import AccordionExample from './components/AccordionExample';
import AlertExample from './components/AlertExample';
import Buttons from './components/Buttons';
import Nav2 from './components/Nav2';
import NavBarComp from './components/NavBarComp';

function App() {
  return (
    <div className="App">
      <h1>Hello Motherfucker</h1>
      <NavBarComp />
      <Buttons />
      <Nav2 />
      <AlertExample />
      <AccordionExample />
    </div>
  );
}

export default App;
