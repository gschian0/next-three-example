import React from "react";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[40, 10, 5]} intensity={0.5} />
      {/* <directionalLight
        castShadow
        position={[10, 420, 100]}
        intensity={0.7}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={10}
        shadow-camera-left={-30}
        shadow-camera-right={10}
        shadow-camera-top={40}
        shadow-camera-bottom={-10}
      /> */}
    </>
  );
};

export default Lights;
