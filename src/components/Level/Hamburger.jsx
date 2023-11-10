import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

/**
 * Hamburger
 * @param {scale} Scale of the hamburger
 * @param {position} Position of the hamburger
 * @returns Hamburger mesh
 */
export default function Hamburger({ scale, position }) {
  const hamburger = useGLTF("/hamburger.glb");
  hamburger.scene.children.forEach((mesh) => {
    mesh.castShadow = true;
  });

  return (
    <RigidBody
      type="fixed"
      colliders="hull"
      restitution={0.2}
      friction={0}
      position={position}
    >
      <primitive object={hamburger.scene} scale={scale} />
    </RigidBody>
  );
}
