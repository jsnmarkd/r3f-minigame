import * as THREE from "three";

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

const floorMaterial = new THREE.MeshStandardMaterial({ color: "limegreen" });

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
        material={floorMaterial}
        receiveShadow
      />
    </group>
  );
}
