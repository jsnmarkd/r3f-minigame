/**
 * Jump function for the player.
 * @param {object} props.body - Reference to the player's rigid body.
 * @param {object} props.world - The physics world from useRapier.
 * @param {object} props.rapier - The rapier physics library.
 */

export default function jump(body, rapier, world){
  const origin = body.current.translation();
  origin.y -= 0.31;
  const direction = { x: 0, y: -1, z: 0 };
  const ray = new rapier.Ray(origin, direction);
  const hit = world.castRay(ray, 10, true);

  // Prevents the player from jumping in mid-air
  if (hit.toi < 0.15) {
    body.current.applyImpulse({ x: 0, y: 0.5, z: 0 });
  }
}