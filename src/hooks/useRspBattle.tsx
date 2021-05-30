import { useState } from "react";
import { HandType } from "../interfaces/handType";

export function useRspBattle(): [
  string,
  number,
  (selectHand: HandType, enemyHand: HandType) => void
] {
  const [resultString, setResulutString] = useState<string>(
    "最初はグーじゃんけん"
  );
  const [winCount, setWinCount] = useState<number>(0);

  const confirmResult = (selectHand: HandType, enemyHand: HandType): void => {
    const result: number = (selectHand - enemyHand + 3) % 3;
    if(result === 0) {
      setResulutString("あいこで");
    } else if (result === 2) {
      setResulutString("勝ち");
      setWinCount(winCount+1);
    } else {
      setResulutString("負け");
    }
  };
  return [resultString, winCount, confirmResult];
}