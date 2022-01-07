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
      scale={[500, 500, 500]}
      // onClick={handleClick}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 24, 1, 24]} />
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
