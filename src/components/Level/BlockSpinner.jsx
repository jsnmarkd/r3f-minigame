import * as THREE from "three";
import { RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

const floorMaterial = new THREE.MeshStandardMaterial({ color: "greenyellow" });
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: "orangered" });

/**
 * BlockSpinner
 * @param {position} Position of the block
 * @returns Floor mesh and moving Spinner
 */

export default function BlockSpinner({ position = [0, 0, 0] }) {
  const [speed] = useState(
    () => (Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1)
  );
  const obstacle = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const rotation = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(0, time * speed, 0)
    );
    obstacle.current.setNextKinematicRotation(rotation);
  });

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

      {/* Spinner */}
      <RigidBody
        ref={obstacle}
        type="kinematicPosition"
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh
          geometry={boxGeometry}
          scale={[3.5, 0.3, 0.3]}
          material={obstacleMaterial}
          castShadow
          receiveShadow
        />
      </RigidBody>
    </group>
  );
}
