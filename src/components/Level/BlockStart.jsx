import * as THREE from "three";

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

const floor1Material = new THREE.MeshStandardMaterial({ color: "limegreen" });
const floor2Material = new THREE.MeshStandardMaterial({ color: "greenyellow" });
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: "orangered" });
const wallMaterial = new THREE.MeshStandardMaterial({ color: "slategrey" });

/**
 * BlockStart
 * @param {position}
 * @returns Floor mesh
 */

export default function BlockStart({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      {/* Floor */}
      <mesh
        geometry={boxGeometry}
        scale={[4, 0.2, 4]}
        position={[0, -0.1, 0]}
        material={floor1Material}
        receiveShadow
      />
    </group>
  );
}
