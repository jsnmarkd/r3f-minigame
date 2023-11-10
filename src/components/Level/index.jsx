import BlockSpinner from "./BlockSpinner";
import BlockStart from "./BlockStart";
import BlockLimbo from "./BlockLimbo";
import BlockWall from "./BlockWall";
import BlockEnd from "./BlockEnd";

export default function Level() {
  return (
    <>
      <BlockStart position={[0, 0, 16]} />
      <BlockSpinner position={[0, 0, 12]} />
      <BlockLimbo position={[0, 0, 8]} />
      <BlockWall position={[0, 0, 4]} />
      <BlockEnd position={[0, 0, 0]} />
    </>
  );
}
