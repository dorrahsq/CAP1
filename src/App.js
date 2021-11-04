import { Route } from 'react-router';
import './App.css';
import Home from './components/homepage';
import Easygame from './components/easygame';
import Instruction from './components/instruction';
import Gamelevel from './components/gameLevel';

function App() {
  return (
    <div className="App">
     
<h1>Test your memory</h1>
{/* <Home/> */}
<Route exact path="/" component={Home}/>
{/* <Route exact path="/Cards" component={Cards}/> */}
<Route exact path="/Instruction" component={Instruction}/>
<Route exact path="/Gamelevel" component={Gamelevel}/>
<Route exact path="/Gamelevel/Easy" component={Easygame}/> 
    </div>
  );
}

export default App;
