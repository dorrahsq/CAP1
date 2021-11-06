import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css";

const Gamelevel = () => {
    return (
        <div className="levelContener">
                       <img id="backGroundImg" src="https://i.pinimg.com/564x/ef/37/cd/ef37cdd4aa5f17ede3d10050e8968df1.jpg" alt=""/>
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
