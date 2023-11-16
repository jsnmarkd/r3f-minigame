/**
 * Reset the player's position, velocity, and angular velocity.
 * @param {*} body 
 */

export default function reset(body) {
  body.current.setTranslation({ x: 0, y: 1, z: 0 });
  body.current.setLinvel({ x: 0, y: 0, z: 0 });
  body.current.setAngvel({ x: 0, y: 0, z: 0 });
}
