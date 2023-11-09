import BlockSpinner from "./BlockSpinner";
import BlockStart from "./BlockStart";
import BlockLimbo from "./BlockLimbo";

export default function Level() {
  return (
    <>
      <BlockStart position={[0, 0, 8]} />
      <BlockSpinner position={[0, 0, 4]} />
      <BlockLimbo position={[0, 0, 0]} />
    </>
  );
}
