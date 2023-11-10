import * as THREE from "three";
import { RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

const floor1Material = new THREE.MeshStandardMaterial({ color: "limegreen" });
const floor2Material = new THREE.MeshStandardMaterial({ color: "greenyellow" });
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: "orangered" });
const wallMaterial = new THREE.MeshStandardMaterial({ color: "slategrey" });

/**
 * BlockWall
 * @param {position}
 * @returns Floor mesh and moving Wall block
 */

export default function BlockWall({ position = [0, 0, 0] }) {
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);
  const obstacle = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const x = Math.sin(time + timeOffset) * 1.25;
    obstacle.current.setNextKinematicTranslation({
      x: position[0] + x,
      y: position[1] + 0.75,
      z: position[2],
    });
  });

  return (
    <group position={position}>
      {/* Floor */}
      <mesh
        geometry={boxGeometry}
        scale={[4, 0.2, 4]}
        position={[0, -0.1, 0]}
        material={floor2Material}
        receiveShadow
      />

      {/* Limbo */}
      <RigidBody
        ref={obstacle}
        type="kinematicPosition"
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh
          geometry={boxGeometry}
          scale={[1.5, 1.5, 0.3]}
          material={obstacleMaterial}
          castShadow
          receiveShadow
        />
      </RigidBody>
    </group>
  );
}
