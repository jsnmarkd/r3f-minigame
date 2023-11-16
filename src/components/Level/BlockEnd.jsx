import * as THREE from "three";
import Hamburger from "./Hamburger";
import LevelText from "./LevelText";

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

const floorMaterial = new THREE.MeshStandardMaterial({ color: "limegreen" });

/**
 * BlockEnd
 * @param {position} Position of the block
 * @returns Floor mesh
 */

export default function BlockEnd({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <LevelText scale={1} position={[0, 2, 2]}>
        FINISH
      </LevelText>
      {/* Floor */}
      <mesh
        geometry={boxGeometry}
        scale={[4, 0.2, 4]}
        position={[0, 0, 0]}
        material={floorMaterial}
        receiveShadow
      />
      <Hamburger scale={0.2} position={[0, 0.25, 0]} />
    </group>
  );
}
