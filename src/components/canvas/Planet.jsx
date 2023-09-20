import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { SectionWrapper } from "../../hoc";

const Planet = ({ rotationPaused }) => {
  const PlanetRef = useRef();
  const airplane = useGLTF("./flight/scene.gltf");

  // Use useFrame to continuously update the rotation of the Planet.scene
  useFrame(() => {
    if (PlanetRef.current && !rotationPaused) {
      // Update the rotation here. For example, you can increase the rotation angle by a small value.
      PlanetRef.current.rotation.y += 0.015; // Adjust the rotation speed as needed.
    }
  });

  return (
    <mesh ref={PlanetRef}>
      <hemisphereLight intensity={0.25} groundColor="black" />
      <pointLight intensity={35} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={airplane.scene}
        scale={0.75}
        position={[-1.30, -1.23, 0.9]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const PlanetCanvas = () => {
  const [rotationPaused, setRotationPaused] = useState(false);

  const handlePauseButtonClick = () => {
    setRotationPaused(!rotationPaused);
  };

  // Use useEffect to listen for window resize events
  useEffect(() => {
    const handleWindowResize = () => {
      // Check the window width and hide the button if it's smaller than 768px
      const screenWidth = window.innerWidth;
      const buttonElement = document.getElementById("pauseButton");

      if (screenWidth <= 768) {
        buttonElement.style.display = "none";
      } else {
        buttonElement.style.display = "block";
      }
    };

    // Add the resize event listener when the component mounts
    window.addEventListener("resize", handleWindowResize);

    // Call the handler once to set the initial state
    handleWindowResize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="xl:mt-40 mt-60">
      <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Planet rotationPaused={rotationPaused} />
        </Suspense>
      </Canvas>
      <div className={`relative xl:mt-20 mt-60`}>
        <button
          id="pauseButton" // Add an ID to the button element
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent border-white border px-4 py-2"
          style={{ zIndex: 1 }}
          onClick={handlePauseButtonClick}
        >
          {rotationPaused ? "Resume Rotation" : "Pause Rotation"}
        </button>
      </div>
    </div>
  );
};

export default SectionWrapper(PlanetCanvas, "Planetcanvas");
