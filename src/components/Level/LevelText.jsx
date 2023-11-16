import { Float, Text, useGLTF } from "@react-three/drei";

export default function LevelText({children, scale, position}) {
  return (
    <Float floatIntensity={0.25} rotationIntensity={0.25}>
      <Text
        font="./bebas-neue-v9-latin-regular.woff"
        scale={scale}
        maxWidth={0.25}
        lineHeight={0.75}
        textAlign="right"
        position={position}
        rotation-y={-0.25}
      >
        {children}
        <meshBasicMaterial toneMapped={false} />
      </Text>
    </Float>
  );
}
