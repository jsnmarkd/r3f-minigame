import * as THREE from "three";
import { RigidBody, CuboidCollider } from "@react-three/rapier";

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const wallMaterial = new THREE.MeshStandardMaterial({ color: "slategrey" });

/**
 *
 * @param {length} Length of the bounds
 * @returns Bounds walls & floor
 */
export default function Bounds({ length = 1 }) {
  return (
    <>
      <RigidBody type="fixed" restitution={0.2} friction={0}>
        {/* Right Wall */}
        <mesh
          position={[2.15, 0.75, -(length * 2) + 2]}
          geometry={boxGeometry}
          material={wallMaterial}
          scale={[0.3, 1.5, 4 * length]}
          castShadow
        />

        {/* Left Wall */}
        <mesh
          position={[-2.15, 0.75, -(length * 2) + 2]}
          geometry={boxGeometry}
          material={wallMaterial}
          scale={[0.3, 1.5, 4 * length]}
          receiveShadow
        />

        {/* End Wall */}
        <mesh
          position={[0, 0.75, -(length * 4) + 2]}
          geometry={boxGeometry}
          material={wallMaterial}
          scale={[4, 1.5, 0.3]}
          receiveShadow
        />

        {/* Floor */}
        <CuboidCollider
          args={[2, 0.1, 2 * length]}
          position={[0, -0.1, -(length * 2) + 2]}
          restitution={0.2}
          friction={1}
        />
      </RigidBody>
    </>
  );
}
