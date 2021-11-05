import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css";

const Gamelevel = () => {
    return (
        <div className="levelContener">
                       <img id="backGroundImg" src="https://i.pinimg.com/originals/78/cc/6e/78cc6e42b85291f8edb4c9ca7a7a1d60.gif" alt=""/>
                       <div className="contentDiv">
            <h4 className="levelHeader"> SELECT LEVEL </h4>
              <button className="levelBtn"> <Link className="levelLink" to="/Gamelevel/Easy"> Easy </Link>  </button>
              <button className="levelBtn"> <Link className="levelLink" to="/Gamelevel/Medium"> Medium </Link>  </button>
              <button className="levelBtn"> <Link className="levelLink" to="/Gamelevel/Hard"> Hard </Link>  </button>

</div>


        </div>
    )
}

export default Gamelevel
