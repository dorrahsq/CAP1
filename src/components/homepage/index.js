import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import "./style.css";

const Home = () => {
    return (
        <div>
            <h1 className="firstHeader">Test your memory</h1>
            <button className="homeBtn"> <Link className="btnLink" to="/Gamelevel"> Start game </Link>   </button>
<div></div>
<button className="homeBtn">  <Link className="btnLink" to="/Instruction"> instruction </Link>  </button>
        </div>
    )
}

export default Home
