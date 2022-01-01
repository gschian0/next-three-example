import React from "react";
import { useRef, useMemo, useState, useCallback } from "react";
import { useThree, useFrame, extend } from "react-three-fiber";
import * as THREE from "three";
import { BackSide } from "three";

function Icosahedron() {
  const [active, set] = useState(false);
  const handleClick = useCallback((e) => set((state) => !state), []);
  return (
    <mesh
      position={[0, 0, -10]}
      scale={active ? [200, 200, 200] : [100, 100, 100]}
      onClick={handleClick}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" side={BackSide} />
    </mesh>
  );
}

const Sphere = () => {
  return (
    <>
      <Icosahedron />
    </>
  );
};

export default Sphere;
