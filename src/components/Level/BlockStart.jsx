import * as THREE from "three";
import LevelText from "./LevelText";

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

const floorMaterial = new THREE.MeshStandardMaterial({ color: "limegreen" });

/**
 * BlockStart
 * @param {position} Position of the block
 * @returns Starting Floor mesh
 */

export default function BlockStart({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      {/* Game Title */}
      <LevelText scale={0.5} position={[0.75, 0.65, 0]}>
        Marble Race
      </LevelText>
      {/* Floor */}
      <mesh
        geometry={boxGeometry}
        scale={[4, 0.2, 4]}
        position={[0, -0.1, 0]}
        material={floorMaterial}
        receiveShadow
      />
    </group>
  );
}
