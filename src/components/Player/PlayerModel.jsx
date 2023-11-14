import { RigidBody } from "@react-three/rapier";

/**
 * PlayerModel Component
 * Renders the 3D model of the player.
 *
 * @param {object} props.body - Reference to the player's rigid body.
 */

export function PlayerModel({ body }) {
  return (
    <RigidBody
      ref={body}
      canSleep={false}
      colliders="ball"
      position={[0, 1, 0]}
      restitution={0.2}
      friction={1}
      linearDamping={0.5}
      angularDamping={0.5}
    >
      <mesh castShadow receiveShadow>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial flatShading color="mediumpurple" />
      </mesh>
    </RigidBody>
  );
}
