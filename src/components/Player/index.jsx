import { RigidBody } from "@react-three/rapier";

export default function Player() {
  return (
    <RigidBody
      canSleep={false}
      colliders="ball"
      position={(0, 1, 0)}
      restitution={0.2}
      friction={1}
    >
      <mesh castShadow receiveShadow>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial flatShading color="mediumpurple" />
      </mesh>
    </RigidBody>
  );
}
