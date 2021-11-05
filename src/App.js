import { Route } from 'react-router';
import './App.css';
import Home from './components/homepage';
import Easygame from './components/easygame';
import Instruction from './components/instruction';
import Gamelevel from './components/gameLevel';
import HardGame from './components/hardgame';
import MediumGame from './components/mediumgame';

function App() {
  return (
    <div className="App">
     

{/* <Home/> */}
<Route exact path="/" component={Home}/>
{/* <Route exact path="/Cards" component={Cards}/> */}
<Route exact path="/Instruction" component={Instruction}/>
<Route exact path="/Gamelevel" component={Gamelevel}/>
<Route exact path="/Gamelevel/Easy" component={Easygame}/> 
<Route exact path="/Gamelevel/Medium" component={MediumGame}/> 
<Route exact path="/Gamelevel/Hard" component={HardGame}/> 
    </div>
  );
}

export default App;
