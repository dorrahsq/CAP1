import { Route } from 'react-router';
import './App.css';
import Home from './components/homepage';
import Cards from './components/cards';
import Instruction from './components/instruction';
function App() {
  return (
    <div className="App">
     
<h1>Test your memory</h1>
{/* <Home/> */}
<Route exact path="/" component={Home}/>
<Route exact path="/Cards" component={Cards}/>
<Route exact path="/Instruction" component={Instruction}/>
    </div>
  );
}

export default App;
