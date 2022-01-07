import React from "react";
import { useRef, useMemo, useState, useCallback } from "react";
import { useThree, useFrame, extend } from "react-three-fiber";
import * as THREE from "three";
import { BackSide, DoubleSide, FrontSide } from "three";

function AddGround() {
  const [active, set] = useState(false);
  const handleClick = useCallback((e) => set((state) => !state), []);
  const textureLoader = new THREE.TextureLoader();
  const dom_house = textureLoader.load("dom_house.jpg");
  return (
    <mesh
      position={[0, 0, -30]}
      // rotation={[Math.PI * 0.5, 0, Math.PI * 0.5]}
      // scale={active ? [20,20,20] : [21,21,21]}
      scale={[20, 20, 20]}
      // onClick={handleClick}
    >
      <planeBufferGeometry attach="geometry" args={[10, 10]} />
      <meshBasicMaterial attach="material" side={DoubleSide} map={dom_house} />
    </mesh>
  );
}

function AddPlane() {
  const [active, set] = useState(false);
  const handleClick = useCallback((e) => set((state) => !state), []);
  return (
    <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[200, 200, 200]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshNormalMaterial attach="material" side={BackSide} />
    </mesh>
  );
}

const Plane = () => {
  return (
    <>
      <AddGround />
      {/* <AddPlane /> */}
    </>
  );
};

export default Plane;
