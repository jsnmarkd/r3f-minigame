import { useMemo } from "react";

export default function shuffle(count, typesArray) {
  return useMemo(() => {
    const shuffle = [];
    for (let i = 0; i < count; i++) {
      const type = typesArray[Math.floor(Math.random() * typesArray.length)];
      shuffle.push(type);
    }
    return shuffle;
  }, [count, typesArray]);
}