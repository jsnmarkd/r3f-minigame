import BlockSpinner from "./BlockSpinner";
import BlockStart from "./BlockStart";
import BlockLimbo from "./BlockLimbo";
import BlockWall from "./BlockWall";
import BlockEnd from "./BlockEnd";
import Bounds from "./Bounds";
import shuffle from "./shuffle";

/**
 * Level
 * @param {number} count Number of blocks to generate
 * @param {types} Types of blocks to generate
 * @param {number} seed Seed to use for random generation
 * @returns the level that the player will play
 */
export default function Level({
  count = 10,
  types = [BlockWall, BlockLimbo, BlockSpinner],
  seed = 0,
}) {
  return (
    <>
      <BlockStart position={[0, 0, 0]} />
      {shuffle(count, types, seed).map((Block, index) => (
        <Block key={index} position={[0, 0, -(index + 1) * 4]} />
      ))}
      <BlockEnd position={[0, 0, -(count + 1) * 4]} />
      <Bounds length={count + 2} />
    </>
  );
}
