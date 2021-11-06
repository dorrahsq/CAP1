import React from 'react'
import { Link } from "react-router-dom";
import "./style.css";

const Instruction = () => {
    return (
        <div className="instPage">
         <img id="backGroundImg" src="https://i.pinimg.com/564x/48/85/25/488525cc541b3d1336caec223a0f06e2.jpg" alt=""/>

        <h1 className="h1welcome"> WELCOME FRIENDS FANS </h1>
        <h1 className="h1welcome" > HOW U DOIN? </h1>
​
        <div className="inner">
          <h2 className="innnerH"> This is a memory game to measure how much you love FREINDS </h2>
​
          <h2 className="innnerH"> how to play : </h2>
          <p className="pr"> - Press start game to play.</p>
          <p className="pr" >
            - Click the cards to see what card they uncover and try to find the
            matching card underneath the other cards.
          </p>
          <p className="pr">
            - Uncover two matching cards at once to hide them from the game.
          </p>
          <p className="pr">
            - There is a timer for each round, you have to choose the cards as
            much as you can before the time runs out.
          </p>
          <p className="pr"> - The number of times you try "moves" will be counted.</p>
          
          <p className="pr">
            - The number of right moves will be counted too , So be carful when
            you choosing the matched cards.
          </p>
​
          <p className="bold">
            If you finish before the time is up you deservedly win , So the game
            will ask you to play next level press "OK" to go .
          </p>
​
          <h2 className="innnerH"> I'LL BE THERE FOR YOU ! </h2>
          <h3 className="innnerH"> Enjoy your Game </h3>
​
​
​<div className="btnDiv">
          <button className="instructionBtn">
            <Link className="lnk" to="/"> Back </Link>{" "}
          </button>
          <button className="instructionBtn">
            {" "}
            <Link className="lnk" to="/Gamelevel"> let's Play </Link>{" "}
          </button>
          </div>
        </div>
      </div>
    )
}

export default Instruction