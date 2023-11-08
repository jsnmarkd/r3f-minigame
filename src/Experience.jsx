import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Lights from "./components/Lights/";
import Level from "./components/Level/";

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />

      <Physics debug>
        <Lights />
        <Level />
      </Physics>
    </>
  );
}
