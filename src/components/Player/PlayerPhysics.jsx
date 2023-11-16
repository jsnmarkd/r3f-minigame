import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import useGame from "../../stores/useGame";
import jump from "./helpers/jump";
import reset from "./helpers/reset";

import * as THREE from "three";

/**
 * PlayerPhysics Component
 * Handles the physics-related logic for the player, including jumping and movement.
 *
 * @param {object} props - The properties passed to the component.
 * @param {object} props.body - Reference to the player's rigid body.
 * @param {object} props.world - The physics world from useRapier.
 * @param {object} props.rapier - The rapier physics library.
 */

export function PlayerPhysics({ body, world, rapier }) {
  const [subscribeKeys, getKeys] = useKeyboardControls();

  const [smoothedCameraPosition] = useState(
    () => new THREE.Vector3(10, 10, 10)
  );
  const [smoothedCameraTarget] = useState(() => new THREE.Vector3());

  const start = useGame((state) => state.start);
  const end = useGame((state) => state.end);
  const restart = useGame((state) => state.restart);
  const blocksCount = useGame((state) => state.blocksCount);

  // Subscribe to the jump key, press and release events, and reset events
  useEffect(() => {
    // Jump
    const unsubscribeJump = subscribeKeys(
      (state) => state.jump,
      (value) => {
        if (value) jump(body, rapier, world);
      }
    );

    // Reset
    const unsubscribeReset = useGame.subscribe(
      (state) => state.phase,
      (phase) => {
        if (phase === "ready") reset(body);
      }
    );

    // Start the game when any key is pressed
    const unsubscribeAny = subscribeKeys(() => start());

    // Unsubscribe from jump events when the component unmounts
    return () => {
      unsubscribeJump();
      unsubscribeReset();
      unsubscribeAny();
    };
  }, []);

  /**
   * Handle player movement and camera position
   */
  useFrame((state, delta) => {
    /**
     * Controls
     */
    const { forward, backward, leftward, rightward } = getKeys();

    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };

    const impulseStrength = 0.6 * delta;
    const torqueStrength = 0.2 * delta;

    if (forward) {
      impulse.z -= impulseStrength;
      torque.x -= torqueStrength;
    }

    if (backward) {
      impulse.z += impulseStrength;
      torque.x += torqueStrength;
    }

    if (rightward) {
      impulse.x += impulseStrength;
      torque.z -= torqueStrength;
    }

    if (leftward) {
      impulse.x -= impulseStrength;
      torque.z += torqueStrength;
    }

    body.current.applyImpulse(impulse);
    body.current.applyTorqueImpulse(torque);

    /**
     * Camera
     */
    const bodyPosition = body.current.translation();

    const cameraPosition = new THREE.Vector3();
    cameraPosition.copy(bodyPosition);
    cameraPosition.z += 2.25;
    cameraPosition.y += 0.65;

    const cameraTarget = new THREE.Vector3();
    cameraTarget.copy(bodyPosition);
    cameraTarget.y += 0.25;

    smoothedCameraPosition.lerp(cameraPosition, 5 * delta);
    smoothedCameraTarget.lerp(cameraTarget, 5 * delta);

    state.camera.position.copy(smoothedCameraPosition);
    state.camera.lookAt(smoothedCameraTarget);

    /**
     * Phases
     */

    // End the game when the player reaches the end of the level
    if (bodyPosition.z < -(blocksCount * 4 + 2)) end();

    // Restart the game when the player falls off the level
    if (bodyPosition.y < -4) restart();
  });

  return null;
}
