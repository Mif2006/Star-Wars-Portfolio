import React, { useEffect, useState } from "react";
import * as TWEEN from "@tweenjs/tween.js";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

const CameraController = ({ setCurrentSection, setIsContact }) => {
  const [targetPosition, setTargetPosition] = useState(new THREE.Vector3());

  const { camera } = useThree();

  const forwardPosition = new THREE.Vector3(3.3, -4.07, -4.63);
  const backwardPosition = new THREE.Vector3(0, -2, 4.2);

  useEffect(() => {
    const direction = new THREE.Vector3()
      .subVectors(forwardPosition, backwardPosition)
      .normalize();

    const handleScroll = (e) => {
      const scrollAmount = e.deltaY * 0.03;
      const moveAmount = direction.clone().multiplyScalar(scrollAmount);
      const newTargetPosition = targetPosition.clone().add(moveAmount);

      const totalDistance = forwardPosition.distanceTo(backwardPosition);
      const targetDistance = newTargetPosition.distanceTo(backwardPosition);
      const lerpFactor = THREE.MathUtils.clamp(
        targetDistance / totalDistance,
        0,
        1
      );

      if (lerpFactor < 2 / 3) {
        setCurrentSection(1);
      } else if (lerpFactor > 2 / 3) {
        setTimeout(() => {
          setCurrentSection(2);
        }, 3000);
      }

      const clampedTargetPosition = new THREE.Vector3().lerpVectors(
        backwardPosition,
        forwardPosition,
        lerpFactor
      );

      new TWEEN.Tween(camera.position).to(clampedTargetPosition, 2000).start();

      setTargetPosition(clampedTargetPosition);
      setIsContact(false)
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [forwardPosition, backwardPosition]);

  useFrame(() => {
    TWEEN.update();
  });
  return null;
};

export default CameraController;
