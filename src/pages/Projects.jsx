import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Loader from "../components/Loader";
import Space from "../models/Space";
import Destroyer from "../models/Destroyer";
import Star from "../assets/Star.png";
import NextWebsite from "../assets/NextWebsite.png";
import SpaceWebsite from "../assets/SpaceWebsite.png";
import WebPortfolio from "../assets/WebPortfolio.png";

const Projects = () => {
  const adjustSpaceForScreenSize = () => {
    let screenScale, screenPosition;

    screenScale = [70, 70, 70];
    screenPosition = [0, 0, -4];

    return [screenScale, screenPosition];
  };
  const adjustDestroyerForScreenSize = () => {
    let screenScale, screenPosition;

    screenScale = [0.01, 0.01, 0.01];
    screenPosition = [4, 1, -6];

    return [screenScale, screenPosition];
  };

  const [spaceScale, spacePosition] = adjustSpaceForScreenSize();
  const [destroyerScale, destroyerPosition] = adjustDestroyerForScreenSize();
  return (
    <section className="w-full h-screen relative bg-black overflow-hidden">
      <div className="absolute top-36 left-20 grid grid-cols-2 gap-5 z-[10] max-w-[40%]">
        <img alt="website-photo" src={NextWebsite} />
        <img alt="website-photo" src={Star} />
        <img alt="website-photo" src={SpaceWebsite} />
        <img alt="website-photo" src={WebPortfolio} />
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
          <Destroyer
            position={destroyerPosition}
            scale={destroyerScale}
            rotation={[13, 9.4, -0.3]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Projects;
