import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import "./style.css";

const Home = () => {
    return (
        <div>
           <img id="backGroundImg" src="https://i.pinimg.com/originals/78/cc/6e/78cc6e42b85291f8edb4c9ca7a7a1d60.gif" alt=""/>
<div className="describeItem">
            <h1 className="firstHeader">Test your memory</h1>
            <button className="homeBtn"> <Link className="btnLink" to="/Gamelevel"> Start game </Link>   </button>
<div></div>
<button className="homeBtn">  <Link className="btnLink" to="/Instruction"> instruction </Link>  </button>
</div>
        </div>
    )
}

export default Home


// describeItem