import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { confirm } from "react-confirm-box";
import "./style.css";

const Easygame = () => {
  //is it better to edit on the same array by using setCards or change on a copy?
  const [cardtry, setcardtry] = useState([]);
  const [Moves, setMoves] = useState(0);
  let [rightMoves, setrightMoves] = useState(0);
  
  const [Cards, setCards] = useState([
    {
      id: 1,
      name: "a",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/53/b2/d6/53b2d6ccc3e2a9c789bcc867ab55cb6c.jpg",
    },
    {
      id: 2,
      name: "b",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/d5/4c/d1/d54cd1fef144248fdedfede82f2261b4.jpg",
    },
    {
      id: 3,
      name: "c",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/10/8f/c0/108fc03650cd0c8347ec81c172acd105.jpg",
    },
    {
      id: 4,
      name: "d",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/9f/29/a1/9f29a1ae09a7f9a8c10afe9d297a23e8.jpg",
    },
    {
      id: 5,
      name: "a",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/53/b2/d6/53b2d6ccc3e2a9c789bcc867ab55cb6c.jpg",
    },
    {
      id: 6,
      name: "b",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/d5/4c/d1/d54cd1fef144248fdedfede82f2261b4.jpg",
    },
    {
      id: 7,
      name: "c",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/10/8f/c0/108fc03650cd0c8347ec81c172acd105.jpg",
    },
    {
      id: 8,
      name: "d",
      isflip: false,
      ismatch: false,
      img: "https://i.pinimg.com/564x/9f/29/a1/9f29a1ae09a7f9a8c10afe9d297a23e8.jpg",
    },
  ]);
  const [Firstchoice, setFirstchoice] = useState(null);
  const [Secondchoice, setSecondchoice] = useState(null);

  //background imge
  const backimge =
    "https://i.pinimg.com/564x/ec/71/d5/ec71d540678c1c75be21ee35e7f19753.jpg";

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
  
  //tryyyy

  // flip Cards on click function -- still
  const flipCard = (id) => {
    console.log("gg");
  };

  let count = 0;

  const showResult = () => {
    console.log(rightMoves);
    if (rightMoves === 3) {
      //   cardtry.map((ele)=>{
      // if(ele.isflip=== false){}
      //   })
      let score = Moves / rightMoves;
      if (score > 2) {
        alert("Bad score ): let's try again! ");
        refreshPage();
      } else {

        alert("Great score , let's go to the next level! ");
        // <Link to="/Gamelevel/Medium"> </Link>;

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

        console.log(cardtry);
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
        }, 500);

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
   <section>
  
      <p className="gameChoice"> Moves: {Moves} </p>
      <p className="gameChoice">Right Moves: {rightMoves}</p> 
      <button className="restartBtn" onClick={refreshPage}> Restart Game </button> </section>

      <div className="allCards">
        {cardtry.map((item, i) => {
          if (item.isflip) {
            return (
              <div>
                {" "}
                <img className="front" src={item.img} />{" "}
              </div>
            );
          } else {
            return (
              <div>
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
        {console.log(cardtry)}
      </div>

  

    </>
  );
}; ///////

export default Easygame;
