import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Loader from "../components/Loader";
import Space from "../models/Space";
import Destroyer from "../models/Destroyer";
import Star from "../assets/Star.png";
import NextWebsite from "../assets/NextWebsite.png";
import SpaceWebsite from "../assets/SpaceWebsite.png";
import WebPortfolio from "../assets/WebPortfolio.png";
import Xwing from "../models/Xwing";

const Projects = () => {
  const adjustSpaceForScreenSize = () => {
    let screenScale, screenPosition;

    screenScale = [70, 70, 70];
    screenPosition = [0, 0, -4];

    return [screenScale, screenPosition];
  };
  const adjustXwingForScreenSize = () => {
    let screenScale, screenPosition;

    screenScale = [0.32, 0.32, 0.32];
    screenPosition = [0, 0.4, 0.4];

    return [screenScale, screenPosition];
  };

  const [spaceScale, spacePosition] = adjustSpaceForScreenSize();
  const [xwingScale, xwingPosition] = adjustXwingForScreenSize();
  return (
    <section className="w-full h-screen relative bg-black overflow-hidden">
      <div className="absolute inset-0 w-full h-full flex items-center justify-center z-[50]">
        <div className="bg-opacity-50 bg-gray-800 text-white w-[380px] h-[600px] rounded-xl p-4">
          <h2 className="text-4xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 mb-2">
            The tech I use
          </h2>
          <p className="text-gray-300 mt-52 text-center">
            As a React.js developer with a specialization in Three.js, I have a
            deep understanding of JavaScript, its libraries, and frameworks. My
            expertise extends to React.js, a popular JavaScript library for
            building user interfaces, especially single-page applications. I
            have a strong grasp of React&apos;s concepts such as components,
            state, props, and hooks. I have also used React Router for handling
            routing in my applications.
          </p>
        </div>
      </div>
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000, position: [0, -2, 3.3] }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <Space
            position={spacePosition}
            scale={spaceScale}
            rotation={[0, 0, 0]}
          />
          <Xwing
            position={xwingPosition}
            scale={xwingScale}
            rotation={[1, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Projects;
