import React, { useEffect, useState, useRef, useCallback } from "react";
import * as THREE from "three";
import { Html } from "drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Object3D } from "three/src/core/Object3D"; //Object3D types
import { SpriteMaterial } from "three";

interface group {
  current: {
    rotation: {
      x: number;
      y: number;
    };
  };
}

// interface actions {
//   current: {
//     idle: {
//       play: () => void;
//     };
//   };
// }

const Logo = () => {
  /* Refs */
  const group: group = useRef();
  // const actions: actions = useRef();
  // const [active, set] = useState(true);
  // const handleOver = useCallback((e) => set((state) => !state), []);
  const handleClick = useCallback(
    () => window.open("http://www.deedotinc.com/", "_blank"),
    []
  );
  /* State */
  const [model, setModel] = useState<THREE.Group | null>(null);

  // const [animation, setAnimation] = useState<AnimationClip[] | null>(null);

  /* Mixer */
  // const [mixer] = useState(() => new THREE.AnimationMixer(null));

  /* Load model */
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(" dolla_text3.gltf", async (gltf) => {
      // const nodes = await gltf.parser.getDependencies("node");
      // const animations = await gltf.parser.getDependencies("animation");

      let model = gltf.scene;
      model.scale.set(50, 50, 50);

      model.children[2].material = new THREE.MeshNormalMaterial();

      setModel(model);

      // setAnimation(animations);
    });
  }, []);

  /* Set animation */
  // useEffect(() => {
  //   if (animation && typeof group.current != "undefined") {
  //     actions.current = {
  //       idle: mixer.clipAction(animation[0], group.current as Object3D),
  //     };
  //     actions.current.idle.play();
  //     return () => animation.forEach((clip) => mixer.uncacheClip(clip));
  //   }
  // }, [animation]);

  /* Animation update */
  // useFrame((_, delta) => mixer.update(delta));

  /* Rotation */
  // useFrame(() => {
  //   if (typeof group.current != "undefined")
  //     return (group.current.rotation.y += 0.01);
  // });

  return (
    <>
      {model ? (
        <group
          ref={group}
          position={[0, 5, -10]}
          scale={[0.3, 0.3, 0.3]}
          // onPointerOver={handleOver}
          onClick={handleClick}
          dispose={null}
        >
          <primitive ref={group} name="Object_1" object={model} />
        </group>
      ) : (
        <Html>Loading...</Html>
      )}
    </>
  );
};

export default Logo;
