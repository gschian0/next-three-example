import React from "react";
import { useRef, useMemo, useState, useCallback } from "react";
import { useThree, useFrame, extend } from "react-three-fiber";
import * as THREE from "three";
import { BackSide, DoubleSide, FrontSide } from "three";

function AddGround() {
  const [active, set] = useState(false);
  const handleClick = useCallback((e) => set((state) => !state), []);
  return (
    <mesh
      position={[0, 0, -10]}
      rotation={[Math.PI * 0.5, 0, Math.PI * 0.5]}
      scale={active ? [200, 200, 200] : [100, 100, 100]}
      onClick={handleClick}
    >
      <planeBufferGeometry attach="geometry" args={[10, 10]} />
      <meshNormalMaterial attach="material" side={DoubleSide} />
    </mesh>
  );
}

function AddPlane() {
  const [active, set] = useState(false);
  const handleClick = useCallback((e) => set((state) => !state), []);
  return (
    <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[200, 200, 200]}>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshNormalMaterial attach="material" side={DoubleSide} />
    </mesh>
  );
}

const Plane = () => {
  return (
    <>
      {/* <AddGround/> */}
      <AddPlane />
    </>
  );
};

export default Plane;
