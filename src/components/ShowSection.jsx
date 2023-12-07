import React from "react";
import * as TWEEN from "@tweenjs/tween.js";
import { useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";

const ShowSection = ({ targetPosition, setIsContact }) => {
  const { camera } = useThree();

  const handleClick = () => {
    new TWEEN.Tween(camera.position).to(targetPosition, 1500).start();

    setTimeout(() => {
      setIsContact(true);
    }, 800);
  };
  return (
    <Html>
      <div className="absolute -top-56 left-[340px] bg-opacity-50 w-[380px] bg-gray-800 text-white rounded-xl shadow z-[10] p-4 ">
        <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-800 mb-2">
          Turning imagination into Reality
        </h2>
        <p className="text-gray-300 mb-4">
          I am a react front end developer who specialises in Next.js & Three.js
        </p>
        <div className="flex flex-row gap-5">
          <button className="border border-blue-500 animate-pulse text-white font-bold py-2 px-4 rounded-xl">
            Scroll to continue
          </button>
          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
          >
            Contact me
          </button>
        </div>
      </div>
    </Html>
  );
};

export default ShowSection;
