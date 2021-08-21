import './App.css';
import {ReactComponent as ReactLogo} from './assets/react.svg';
import Card from "./components/card/Card";

function App() {
  return (
    <div className="App">
      <ReactLogo id="img"/>
      <Card/>
  
    </div>
  );
}

export default App;