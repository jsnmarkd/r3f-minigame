import { Physics } from "@react-three/rapier";
import Lights from "./components/Lights/";
import Level from "./components/Level/";
import Player from "./components/Player";
import useGame from "./stores/useGame";

export default function Experience() {
  const blocksCount = useGame((state) => state.blocksCount);
  const blocksSeed = useGame((state) => state.blocksSeed);

  return (
    <>
      <color attach="background" args={["#bdedfc"]} />
      
      <Physics debug={false}>
        <Lights />
        <Level count={blocksCount} seed={blocksSeed} />
        <Player />
      </Physics>
    </>
  );
}
