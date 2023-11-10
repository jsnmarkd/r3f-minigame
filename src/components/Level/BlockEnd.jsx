import * as THREE from "three";
import Hamburger from "./Hamburger";

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

const floor1Material = new THREE.MeshStandardMaterial({ color: "limegreen" });
const floor2Material = new THREE.MeshStandardMaterial({ color: "greenyellow" });
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: "orangered" });
const wallMaterial = new THREE.MeshStandardMaterial({ color: "slategrey" });

/**
 * BlockEnd
 * @param {position}
 * @returns Floor mesh
 */

export default function BlockEnd({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      {/* Floor */}
      <mesh
        geometry={boxGeometry}
        scale={[4, 0.2, 4]}
        position={[0, 0, 0]}
        material={floor1Material}
        receiveShadow
      />
      <Hamburger scale={0.2} position={[0, 0.25, 0]} />
    </group>
  );
}
