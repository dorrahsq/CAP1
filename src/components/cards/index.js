import React, { useState, useEffect } from "react";

import "./style.css";

const Cards = () => {
  //is it better to edit on the same array by using setCards or change on a copy?
  const [cardtry, setcardtry] = useState([]);
  const [Cards, setCards] = useState([
    {
      id: 1,
      img: "https://i.pinimg.com/564x/53/b2/d6/53b2d6ccc3e2a9c789bcc867ab55cb6c.jpg",
      isflip: false,
      ismatch: false ,
    },
    {
      id: 2,
      img: "https://i.pinimg.com/564x/d5/4c/d1/d54cd1fef144248fdedfede82f2261b4.jpg",
      isflip: false,
      ismatch: false ,
    },
    {
      id: 3,
      img: "https://i.pinimg.com/564x/10/8f/c0/108fc03650cd0c8347ec81c172acd105.jpg",
      isflip: false,
      ismatch: false ,
    },
    {
      id: 4,
      img: "https://i.pinimg.com/564x/9f/29/a1/9f29a1ae09a7f9a8c10afe9d297a23e8.jpg",
      isflip: false,
      ismatch: false ,
    },
  ]);
  const [Firstchoice, setFirstchoice] = useState(null);
  const [Secondchoice, setSecondchoice] = useState(null);

  //background imge
  const backimge =
    "https://i.pinimg.com/564x/ec/71/d5/ec71d540678c1c75be21ee35e7f19753.jpg";

  //pair of each card - to save the same id and not repeat the imges url
  const pairCards = [...Cards, ...Cards];

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

  // flip Cards on click function -- still
  const flipCard = (id) => {
    console.log("gg");
  };

  let count = 0;
  const handleClick = (item) => {
    // console.log(item);
    if (Firstchoice === null) {
      setFirstchoice(item);
      count++;
    } else {
      if (item.id === Firstchoice.id) {
        console.log("same");
        setcardtry([...cardtry , item.ismatch= true])
        console.log(cardtry);
        count = 0;
        setFirstchoice(null);
      } else {
        console.log("diff");
        count = 0;
        setFirstchoice(null);
      }
    }
  };

  return (
    <div className="allCards">
      {cardtry.map((item, i) => {
        return (
          <div className="card" onClick={() => flipCard(item.id)}>
            <img className="front" src={item.img} />
            <img
              className="back"
              onClick={() => handleClick(item)}
              src={backimge}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
