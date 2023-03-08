import { OrbitControls } from "@react-three/drei";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxBufferGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};