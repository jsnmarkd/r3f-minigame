import { Physics } from "@react-three/rapier";
import Lights from "./components/Lights/";
import Level from "./components/Level/";

export default function Experience() {
  return (
    <>
      <Physics debug={false}>
        <Lights />
        <Level />
      </Physics>
    </>
  );
}
