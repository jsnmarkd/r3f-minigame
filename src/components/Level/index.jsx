import BlockSpinner from "./BlockSpinner";
import BlockStart from "./BlockStart";
import BlockLimbo from "./BlockLimbo";
import BlockWall from "./BlockWall";

export default function Level() {
  return (
    <>
      <BlockStart position={[0, 0, 12]} />
      <BlockSpinner position={[0, 0, 8]} />
      <BlockLimbo position={[0, 0, 4]} />
      <BlockWall position={[0, 0, 0]} />
    </>
  );
}
