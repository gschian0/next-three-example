import React from "react";
import { useRef, useMemo, useState, useCallback } from "react";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import Lights from "@/components/Light";
import Model from "@/components/Model";
import Logo from "@/components/Logo";
import Sphere from "@/components/NormalSpnere";
import Plane from "@/components/Plane";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

const MakeModel = () => {
  return (
    <>
      <Model />
    </>
  );
};

const handleClick = () => {
  window.open("http://www.deedotinc.com/", "_blank");
};

const App = () => {
  return (
    <>
      <Canvas
        camera={{ position: [0, 10, 100] }}
        colorManagement={true}
        resize={{ scroll: true }}
        onCreated={({ gl }) => {
          gl.outputEncoding = THREE.LinearEncoding;
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          gl.toneMapping = THREE.CineonToneMapping;
        }}
      >
        <color attach="background" args={[0, 1, 1]} />
        <CameraControls />
        <Lights />
        <Logo />
        <Model />
        <Sphere />
        <Plane />
      </Canvas>
    </>
  );
};

export default App;
