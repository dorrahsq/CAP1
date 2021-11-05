import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css";

const Gamelevel = () => {
    return (
        <div className="levelContener">
            <h4 className="levelHeader"> SELECT LEVEL </h4>
              <button className="levelBtn"> <Link className="levelLink" to="/Gamelevel/Easy"> Easy </Link>  </button>
              <button className="levelBtn"> <Link className="levelLink" to="/Gamelevel/Medium"> Medium </Link>  </button>
              <button className="levelBtn"> <Link className="levelLink" to="/Gamelevel/Hard"> Hard </Link>  </button>

        </div>
    )
}

export default Gamelevel
