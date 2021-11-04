import React from 'react'
import { Link } from 'react-router-dom'

const Gamelevel = () => {
    return (
        <div>
              <button> <Link to="/Gamelevel/Easy"> Easy </Link>  </button>
              <button> <Link to="/Gamelevel/Medium"> Medium </Link>  </button>
              <button> <Link to="/Gamelevel/Hard"> Hard </Link>  </button>

        </div>
    )
}

export default Gamelevel
