import BlockSpinner from "./BlockSpinner";
import BlockStart from "./BlockStart";
import BlockLimbo from "./BlockLimbo";
import BlockWall from "./BlockWall";
import BlockEnd from "./BlockEnd";
import shuffle from "./shuffle";

export default function Level({
  count = 5,
  types = [BlockWall, BlockLimbo, BlockSpinner],
}) {

  return (
    <>
      <BlockStart position={[0, 0, 0]} />
      {shuffle(count, types).map((Block, index) => (
        <Block key={index} position={[0, 0, -(index + 1) * 4]} />
      ))}
      <BlockEnd position={[0, 0, -(count + 1) * 4]} />
    </>
  );
}
