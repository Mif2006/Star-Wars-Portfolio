/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "../components/Loader";
import DeathStar from "../models/DeathStar";
import Destroyer from "../models/Destroyer";
import Tie from "../models/Tie";
import Space from "../models/Space";
import Xwing from "../models/Xwing";
import CameraController from "../components/CameraController";
import { Link } from "react-router-dom";
import ShowSection from "../components/ShowSection";
import * as THREE from "three";
import Contact from "../components/Contact";

const Home = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [isContact, setIsContact] = useState(false);

  const adjustStarForScreenSize = () => {
    let screenScale, screenPosition;

    screenScale = [0.6, 0.6, 0.6];
    screenPosition = [0, -6.5, -43.4];

    return [screenScale, screenPosition];
  };
  const adjustDestroyerForScreenSize = () => {
    let screenScale, screenPosition;

    screenScale = [0.003, 0.003, 0.003];
    screenPosition = [4, -4, -6];

    return [screenScale, screenPosition];
  };
  const adjustTieForScreenSize = () => {
    let screenScale, screenPosition;

    screenScale = [0.01, 0.01, 0.01];
    screenPosition = [3.3, -4, -4.8];

    return [screenScale, screenPosition];
  };
  const adjustSpaceForScreenSize = () => {
    let screenScale, screenPosition;

    screenScale = [70, 70, 70];
    screenPosition = [0, 0, -4];

    return [screenScale, screenPosition];
  };
  const adjustXwingForScreenSize = () => {
    let screenScale, screenPosition;

    screenScale = [0.2, 0.2, 0.2];
    screenPosition = [-2.8, 0.6, 0.4];

    return [screenScale, screenPosition];
  };

  const [starScale, starPosition] = adjustStarForScreenSize();
  const [destroyerScale, destroyerPosition] = adjustDestroyerForScreenSize();
  const [tieScale, tiePosition] = adjustTieForScreenSize();
  const [spaceScale, spacePosition] = adjustSpaceForScreenSize();
  const [xwingScale, xwingPosition] = adjustXwingForScreenSize();
  return (
    <section className="w-full h-screen relative bg-black overflow-hidden">
      {isContact && <Contact />}
      {currentSection === 2 && (
        <div className="absolute top-20 right-20 bg-opacity-50 w-[380px] bg-gray-800 text-white rounded-xl shadow-lg z-[10] p-4">
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-800 mb-2">
            Learn more about me
          </h2>
          <p className="text-gray-300 mb-4">
            Hello, I&apos;m a passionate React.js developer with a
            specialization in Three.js, a powerful JavaScript library that
            allows for the creation of 3D graphics in a web browser. My
            experience spans across various projects, and I&apos;m always
            excited to take on new challenges.
          </p>
          <div className="flex flex-row gap-5">
            <Link
              to="/about"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
            >
              About me
            </Link>
            <Link
              to="/projects"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
            >
              My Projects
            </Link>
          </div>
        </div>
      )}
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000, position: [0, -2, 3.3] }}
      >
        <Suspense fallback={<Loader />}>
          <ShowSection
            targetPosition={new THREE.Vector3(0, 0, -9)}
            setIsContact={setIsContact}
          />
          <directionalLight position={[1, 1, 1]} intensity={3} />
          <DeathStar
            position={starPosition}
            scale={starScale}
            rotation={[0, 0, 0]}
          />
          <Space
            position={spacePosition}
            scale={spaceScale}
            rotation={[0, 0, 0]}
          />
          <Destroyer
            position={destroyerPosition}
            scale={destroyerScale}
            rotation={[13, 20.5, -0.3]}
          />
          <Tie
            position={tiePosition}
            scale={tieScale}
            rotation={[0.2, -0.3, 0.2]}
          />
          <Xwing
            position={xwingPosition}
            scale={xwingScale}
            rotation={[0, 3, 0]}
          />
          <CameraController
            setCurrentSection={setCurrentSection}
            setIsContact={setIsContact}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
