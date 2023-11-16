import { useMemo } from "react";

/**
 * Shuffle an array of types
 * @param {*} count number of types to shuffle
 * @param {*} typesArray array of types
 * @returns an array of shuffled types
 */
export default function shuffle(count, typesArray, seed) {
  return useMemo(() => {
    const shuffle = [];
    for (let i = 0; i < count; i++) {
      const type = typesArray[Math.floor(Math.random() * typesArray.length)];
      shuffle.push(type);
    }
    return shuffle;
  }, [count, typesArray, seed]);
}
