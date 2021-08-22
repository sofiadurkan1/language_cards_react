import './App.css';
import {ReactComponent as ReactLogo} from './assets/react.svg';
import Card from "./components/card/Card";
import { categories } from "./helper/Data";



function App() {
  return (
    <div className="App">
      <ReactLogo id="img"/>
      <h2>Languages</h2>
      <div className="card-container">
      {categories.map((card) => (
         <Card options = {card}/>

      ))}
      </div>
     

  
    </div>
  )
  
}

export default App;