import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import "./style.css";

const Home = () => {
    return (
        <div>
           <img id="backGroundImg" src="https://i.pinimg.com/564x/ef/37/cd/ef37cdd4aa5f17ede3d10050e8968df1.jpg" alt=""/>
<div className="describeItem">
            <h1 className="firstHeader">Test your memory</h1>
            <button className="homeBtn"> <Link className="btnLink" to="/Gamelevel"> Start game </Link>   </button>
<div></div>
<button className="homeBtn" id="lastB">  <Link className="btnLink" to="/Instruction"> instruction </Link>  </button>
</div>
        </div>
    )
}

export default Home


// describeItem