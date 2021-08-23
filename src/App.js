import './App.css';
import {ReactComponent as ReactLogo} from './assets/react.svg';
import Card from "./components/card/Card";
import { categories } from "./helper/Data";



function App() {
  return (
   
    <div className="App">
       <div className="header">
      <ReactLogo id="img"/>
      <div className="card-container">
      {categories.map((card) => (
         <Card options = {card}/>

      ))}
      </div>
      </div>
     

  
    </div>
  )
  
}

export default App;