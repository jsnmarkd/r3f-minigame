import { RigidBody, useRapier } from "@react-three/rapier";
import { useRef } from "react";
import { PlayerPhysics } from "./PlayerPhysics";

/**
 * Player
 * @returns a Sphere object as the player
 */

export default function Player() {
  const body = useRef();
  const { rapier, world } = useRapier();

  return (
    <>
      <PlayerPhysics body={body} world={world} rapier={rapier} />
      <RigidBody
        ref={body}
        canSleep={false}
        colliders="ball"
        position={(0, 1, 0)}
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
    </>
  );
}
