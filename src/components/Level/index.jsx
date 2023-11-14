import BlockSpinner from "./BlockSpinner";
import BlockStart from "./BlockStart";
import BlockLimbo from "./BlockLimbo";
import BlockWall from "./BlockWall";
import BlockEnd from "./BlockEnd";
import Bounds from "./Bounds";
import shuffle from "./shuffle";
import Player from "../Player";

/**
 * Level
 * @param {count} Number of blocks to generate
 * @param {types} Types of blocks to generate
 * @returns the level that the player will play
 */
export default function Level({
  // Number of blocks to generate
  count = 10,
  types = [BlockWall, BlockLimbo, BlockSpinner],
}) {
  return (
    <>
      <BlockStart position={[0, 0, 0]} />
      {shuffle(count, types).map((Block, index) => (
        <Block key={index} position={[0, 0, -(index + 1) * 4]} />
      ))}
      <BlockEnd position={[0, 0, -(count + 1) * 4]} />
      <Bounds length={count + 2} />
      <Player />
    </>
  );
}
