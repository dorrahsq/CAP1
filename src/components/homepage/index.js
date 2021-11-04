import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <button> <Link to="/Gamelevel"> Start game </Link>   </button>
<div></div>
<button>  <Link to="/Instruction"> instruction </Link>  </button>
        </div>
    )
}

export default Home
