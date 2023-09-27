import logo from './logo.svg';
import './App.css';
import Cum from './TickButton';
function App() {
  let name = "Igor";
  let isNameShowing = false;
  return (
    <div className="App">
      {/*<h1>Hello {isNameShowing ? name : "Who?"}</h1>*/ }
      <Cum/>
    </div>
  );
}

export default App;
