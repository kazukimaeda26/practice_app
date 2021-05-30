import React, {useEffect, useState}from "react";
import { Link } from "react-router-dom";
import Hand from "../../components/hand";
import { HandType } from "../../interfaces/handType";

export default function Index() {
  const handTypes: HandType[] = [HandType.Rock, HandType.Scissors, HandType.Paper];

  const battleCountVal = React.useRef(0);
  const winCountVal = React.useRef(0);
  
  const [selectHand, setSelectHand] = useState<HandType>(HandType.Rock);
  const [enemyHand, setEnemyHand] = useState<HandType>(HandType.Rock);
  const [resultString, setResultString] = useState<string>(
    "最初はグー、ジャンケン"
  );
  const [winCount, setWinCount] = useState<number>(0);
  const [battleCount, setBattleCount] = useState<number>(0);

  useEffect(() => {
    alert("手を選ぶと、勝敗が決まるよ。");
    return() => {
      alert(`【戦績】\n${battleCountVal.current}戦中、${winCountVal.current}勝でした`);
    }
  },[])

  useEffect(() => {
    if( selectHand !== undefined ) {
      const enemyHand: HandType = Math.floor(Math.random()*3);
      setEnemyHand(enemyHand);
      confirmResult(selectHand, enemyHand);
    }
    battleCountVal.current = battleCount;
    winCountVal.current = winCount;
  }, [battleCount]);

  const handleOnClick = (val: HandType): void => {
    setBattleCount(battleCount + 1);
    setSelectHand(val);
  }
  const confirmResult = (selectHand: HandType, enemyHand: HandType): void => {
    const result: number = (selectHand - enemyHand + 3) % 3;
    if(result === 0){
      setResultString("あいこで");
    } else if (result === 2) {
      setResultString("勝ち");
      setWinCount(winCount+1);
    } else {
      setResultString("負け");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <h1>ジャンケンページ</h1>
      <h2>自分の手</h2>
      <div style={{ display: "flex" }}>
        {handTypes.map((handType: HandType, index: number) => (
          <Hand selectHand={handType} selectedHand={selectHand} clickHand={handleOnClick} key={index} />
        ))}
      </div>
      <h1 style={{color: "red"}}>{resultString}</h1>
      <h2 style={{marginTop: 10}}>相手の手</h2>
      <div style={{display: "flex"}}>
        {handTypes.map((handType: HandType, index: number) => (
          <Hand selectHand={handType} selectedHand={enemyHand} clickHand={handleOnClick} key={index}/>
        ))}
      </div>
      <Link to="/">
        <h1>ジャンケンを終了する</h1>
        <h4>戦績が発表されます。</h4>
      </Link>

    </div>
  )
}