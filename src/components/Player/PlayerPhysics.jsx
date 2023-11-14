import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { useEffect } from "react";

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

  // Function to handle player jumping
  const jump = () => {
    const origin = body.current.translation();
    origin.y -= 0.31;
    const direction = { x: 0, y: -1, z: 0 };
    const ray = new rapier.Ray(origin, direction);
    const hit = world.castRay(ray, 10, true);

    // Prevents the player from jumping in mid-air
    if (hit.toi < 0.15) {
      body.current.applyImpulse({ x: 0, y: 0.5, z: 0 });
    }
  };

  // Subscribe to the jump key press and release events
  useEffect(() => {
    const unsubscribeJump = subscribeKeys(
      (state) => state.jump,
      (value) => {
        if (value) jump();
      }
    );

    // Unsubscribe from jump events when the component unmounts
    return () => {
      unsubscribeJump();
    };
  }, []);

  // Function to handle player movement
  useFrame((state, delta) => {
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
  });

  return null;
}
