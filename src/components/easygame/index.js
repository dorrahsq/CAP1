import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { confirm } from "react-confirm-box";
import "./style.css";
import Timer from "../Timer";
import { FaBackward } from "react-icons/fa";

const Easygame = () => {
  //is it better to edit on the same array by using setCards or change on a copy?
  const [cardtry, setcardtry] = useState([]);
  const [Moves, setMoves] = useState(0);
  let [rightMoves, setrightMoves] = useState(0);
  const [timerState, settimerState] = useState(true);
  const [Cards, setCards] = useState([
    {
      id: 1,
      name: "a",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/ce/14/09/ce1409df01a7a907e4ed941b0bf7292f.jpg",
    },
    {
      id: 2,
      name: "b",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/d2/53/b5/d253b5b75a37854da7e7d81c4d5b8137.jpg",
    },
    {
      id: 3,
      name: "c",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/b6/0d/b9/b60db9ec09c467b5224b4325d8d71b0a.jpg",
    },
    {
      id: 4,
      name: "d", //
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/91/41/41/9141412d401450a7ae97f46779701fe9.jpg",
    },
    {
      id: 5,
      name: "a",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/ce/14/09/ce1409df01a7a907e4ed941b0bf7292f.jpg",
    },
    {
      id: 6,
      name: "b",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/d2/53/b5/d253b5b75a37854da7e7d81c4d5b8137.jpg",
    },
    {
      id: 7,
      name: "c",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/b6/0d/b9/b60db9ec09c467b5224b4325d8d71b0a.jpg",
    },
    {
      id: 8,
      name: "d",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/91/41/41/9141412d401450a7ae97f46779701fe9.jpg",
    },
  ]);
  const [Firstchoice, setFirstchoice] = useState(null);
  const [Secondchoice, setSecondchoice] = useState(null);
  const [model, setModel] = useState(false);

  //background imge
  const backimge =
    "https://i.pinimg.com/564x/29/14/18/29141838a9191ba491f737fa5e1ae9e5.jpg";

  //pair of each card - to save the same id and not repeat the imges url
  const pairCards = [...Cards];

  // shuuffle Cards function
  function shuuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // to shuuffle Cards just on the begin
  useEffect(() => {
    setcardtry(shuuffleCards(pairCards));
  }, []);

 

  let count = 0;

  const showResult = () => {
    console.log(rightMoves);
    if (rightMoves === 3) {
      let score = Moves / rightMoves;
      if (score > 2) {
        //2
        alert("Bad score ): let's try again! ");
        refreshPage();
      } else {
        setModel(true);
        settimerState(false);
      }
    }
  };

  const handleClick = (item, i) => {
    // console.log(item);
    if (Firstchoice === null) {
      setFirstchoice(item);
      setcardtry(
        cardtry.map((ele) => {
          if (ele.id === item.id) {
            return { ...ele, isflip: true };
          } else {
            return ele;
          }
        })
      );

      count++;
    } else {
      setMoves(Moves + 1);
      console.log(Moves);
      if (item.name === Firstchoice.name) {
        console.log("same");
        setrightMoves(rightMoves + 1);

        showResult();

        setcardtry(
          cardtry.map((ele) => {
            if (ele.name === Firstchoice.name) {
              return { ...ele, ismatch: true, isflip: true };
            } else {
              return ele;
            }
          })
        );

        
        count = 0;
        setFirstchoice(null);
      } else {
        setcardtry(
          cardtry.map((ele) => {
            if (ele.id === item.id) {
              return { ...ele, isflip: true };
            } else {
              return ele;
            }
          })
        );
        setTimeout(() => {
          setcardtry(
            cardtry.map((ele) => {
              if (ele.id === item.id || ele.id === Firstchoice.id) {
                return { ...ele, isflip: false };
              } else {
                return ele;
              }
            })
          );
        }, 900);

        console.log("diff");
        count = 0;
        setFirstchoice(null);
      }
    }
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <>
      <div className="relDiv">
        <p className="divAct">
          {" "}
          <Link className="homeLink" to="/">
            {" "}
            <FaBackward className="homeIcon" /> <span> Home </span>{" "}
          </Link>{" "}
        </p>

        <section>
          <p className="gameChoice"> Moves: {Moves} </p>
          <p className="gameChoice">Right Moves: {rightMoves}</p>
          <button className="restartBtn" onClick={refreshPage}>
            {" "}
            Restart Game{" "}
          </button>{" "}
        </section>

        <div className="allCards">
          {cardtry.map((item, i) => {
            if (item.isflip) {
              return (
                <div className="cardDiv">
                  {" "}
                  <img className="front" src={item.img} />{" "}
                </div>
              );
            } else {
              return (
                <div className="cardDiv">
                  {" "}
                  <img
                    className="back"
                    onClick={() => handleClick(item, i)}
                    src={backimge}
                  />{" "}
                </div>
              );
            }
          })}
    
        </div>

        {/* <Timer time={15} go={timerState} /> */}

        {
          model ? (
            <div className="model">
              {" "}
              Great score 😍 , let's go to the next level{" "}
              <button className="letsBtn">
                {" "}
                <Link to="/Gamelevel/Medium"> let's go </Link>{" "}
              </button>{" "}
            </div>
          ) : null //absulote
        }
      </div>
    </>
  );
}; ///////

export default Easygame;
