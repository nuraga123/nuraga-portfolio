// components/CarScene.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useMediaQuery } from "@/hooks/useWindowWidth";
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
} from "react-icons/fa";

const CarScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const windowWidth = useMediaQuery(1024);
  const [isMobile, setIsMobile] = useState(windowWidth);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(windowWidth);

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, [windowWidth]);

  const controls = useMemo(
    () => ({
      forward: false,
      backward: false,
      left: false,
      right: false,
    }),
    []
  );

  useEffect(() => {
    // scene, camera, renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(0, 2, 8);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current?.appendChild(renderer.domElement);

    const controlsCamera = new OrbitControls(camera, renderer.domElement);
    controlsCamera.enableDamping = false;
    controlsCamera.dampingFactor = 0.05;
    controlsCamera.enablePan = false;
    controlsCamera.minDistance = 5;
    controlsCamera.maxDistance = 30;
    controlsCamera.enableZoom = true;
    controlsCamera.enableRotate = true;

    scene.add(new THREE.AmbientLight("white", 0.5));
    const dirLight = new THREE.DirectionalLight("white", 1);
    dirLight.position.set(5, 5, 5);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const road = new THREE.Mesh(
      new THREE.PlaneGeometry(400, 200),
      new THREE.MeshStandardMaterial({ color: "#333" })
    );
    road.rotation.x = -Math.PI / 2;
    scene.add(road);

    const infoPointers = [
      { position: new THREE.Vector3(1, 0, -5), message: "Car1" },
      { position: new THREE.Vector3(-5, 0, 0), message: "Car2" },
      { position: new THREE.Vector3(0, 0, 5), message: "Car3" },
    ];

    const createInfoSphere = (position: THREE.Vector3) => {
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 32, 32),
        new THREE.MeshStandardMaterial({ color: "red" })
      );
      sphere.position.copy(position);
      sphere.position.y = 0;
      scene.add(sphere);
    };

    infoPointers.forEach((p) => createInfoSphere(p.position));

    const clampPosition = (pos: THREE.Vector3) => {
      pos.x = Math.max(-15, Math.min(15, pos.x));
      pos.z = Math.max(-10, Math.min(10, pos.z));
      return pos;
    };

    const showInfo = (msg: string) => {
      const block = document.getElementById("info-block");
      if (!block) return;
      block.textContent = msg;
      block.style.display = "block";
    };

    const hideInfo = () => {
      const block = document.getElementById("info-block");
      if (!block) return;
      block.style.display = "none";
    };

    // Load car model
    const loader = new GLTFLoader();
    let car: THREE.Object3D | null = null;
    let frontLeftWheel: THREE.Object3D | null = null;
    let frontRightWheel: THREE.Object3D | null = null;
    let rearLeftWheel: THREE.Object3D | null = null;
    let rearRightWheel: THREE.Object3D | null = null;

    loader.load(
      "/models/car/scene.gltf",
      (gltf) => {
        car = new THREE.Object3D();
        const model = gltf.scene;

        model.scale.set(1, 1, 1);
        model.rotation.y = -Math.PI / 2;
        car.add(model);
        car.position.set(1, 0, 0);
        scene.add(car);

        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const name = child.name.toLowerCase();
            if (name.includes("fl")) frontLeftWheel = child;
            if (name.includes("fr")) frontRightWheel = child;
            if (name.includes("rl")) rearLeftWheel = child;
            if (name.includes("rr")) rearRightWheel = child;
          }
        });
      },
      undefined,
      (err) => console.error(err)
    );

    const listener = new THREE.AudioListener();
    camera.add(listener);

    let engineSound: THREE.Audio | null = null;

    const audioLoader = new THREE.AudioLoader();
    audioLoader.load("/sounds/engine.mp3", (buffer) => {
      engineSound = new THREE.Audio(listener);
      engineSound.setBuffer(buffer);
      engineSound.setLoop(true);
      engineSound.setVolume(0.01);
      engineSound.play();
    });

    const updateEngineSound = () => {
      if (engineSound) {
        const pitch = Math.abs(speed * 10);
        engineSound.setPlaybackRate(0.5 + pitch);
      }
    };

    const checkInfoPointer = () => {
      if (!car) return;
      let isNear = false;
      infoPointers.forEach((p) => {
        if (car!.position.distanceTo(p.position) < 0.5) {
          showInfo(p.message);
          isNear = true;
        }
      });
      if (!isNear) hideInfo();
    };

    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.code === "KeyW" || e.code === "ArrowUp") controls.forward = true;
      if (e.code === "KeyS" || e.code === "ArrowDown") controls.backward = true;
      if (e.code === "KeyA" || e.code === "ArrowLeft") controls.left = true;
      if (e.code === "KeyD" || e.code === "ArrowRight") controls.right = true;
    };

    const keyUpHandler = (e: KeyboardEvent) => {
      if (e.code === "KeyW" || e.code === "ArrowUp") controls.forward = false;
      if (e.code === "KeyS" || e.code === "ArrowDown")
        controls.backward = false;
      if (e.code === "KeyA" || e.code === "ArrowLeft") controls.left = false;
      if (e.code === "KeyD" || e.code === "ArrowRight") controls.right = false;
    };

    window.addEventListener("keydown", keyDownHandler);
    window.addEventListener("keyup", keyUpHandler);

    let speed = 0;
    const maxSpeed = 0.1;
    const acceleration = 0.002;
    const deceleration = 0.005;
    const rotationSpeed = 0.03;

    const moveCar = () => {
      if (!car) return;

      if (controls.forward) speed = Math.min(maxSpeed, speed + acceleration);
      else if (controls.backward)
        speed = Math.max(-maxSpeed, speed - acceleration);
      else speed += speed > 0 ? -deceleration : speed < 0 ? deceleration : 0;

      if (speed !== 0) {
        if (controls.left)
          car.rotation.y += rotationSpeed * (speed > 0 ? 1 : -1);
        if (controls.right)
          car.rotation.y -= rotationSpeed * (speed > 0 ? 1 : -1);
      }

      const direction = new THREE.Vector3(
        Math.sin(car.rotation.y),
        0,
        Math.cos(car.rotation.y)
      );
      car.position.addScaledVector(direction, speed);
      clampPosition(car.position);
      updateEngineSound();

      const wheelSpeed = speed * 20;
      if (frontLeftWheel) frontLeftWheel.rotation.x -= wheelSpeed;
      if (frontRightWheel) frontRightWheel.rotation.x -= wheelSpeed;
      if (rearLeftWheel) rearLeftWheel.rotation.x -= wheelSpeed;
      if (rearRightWheel) rearRightWheel.rotation.x -= wheelSpeed;

      const steerAngle = controls.left ? 0.3 : controls.right ? -0.3 : 0;
      if (frontLeftWheel) frontLeftWheel.rotation.y = steerAngle;
      if (frontRightWheel) frontRightWheel.rotation.y = steerAngle;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      moveCar();
      checkInfoPointer();
      controlsCamera.update();
      renderer.setClearColor("lightblue");
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
      window.removeEventListener("keyup", keyUpHandler);
      if (containerRef !== null) {
        const { current } = containerRef;
        if (current !== null) {
          current.innerHTML = "";
        }
      }
    };
  }, [controls]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        maxHeight: "550px",
      }}
    >
      <div ref={containerRef} />
      <div
        id="info-block"
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          background: "rgba(0,0,0,0.7)",
          color: "white",
          padding: "10px",
          display: "none",
          borderRadius: "8px",
        }}
      ></div>

      {isMobile && (
        <>
          <div
            style={{
              backgroundColor: "rgba(97, 94, 94, 0.7)",
              padding: "10px",
              borderRadius: "8px",
              position: "absolute",
              bottom: "5%",
              left: "5%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              zIndex: 10,
            }}
          >
            <div style={{ display: "flex", gap: "25px" }}>
              <FaArrowAltCircleLeft
                onTouchStart={() => (controls.left = true)}
                onTouchEnd={() => (controls.left = false)}
                style={{
                  fontSize: "50px",
                }}
              />
              <FaArrowAltCircleRight
                onTouchStart={() => (controls.right = true)}
                onTouchEnd={() => (controls.right = false)}
                style={{
                  fontSize: "50px",
                }}
              />
            </div>
          </div>
          <div
            style={{
              backgroundColor: "rgba(97, 94, 94, 0.7)",
              padding: "10px",
              borderRadius: "8px",
              position: "absolute",
              bottom: "5%",
              right: "5%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              zIndex: 10,
            }}
          >
            <div style={{ display: "flex", gap: "25px" }}>
              <FaArrowAltCircleUp
                onTouchStart={() => (controls.forward = true)}
                onTouchEnd={() => (controls.forward = false)}
                style={{
                  fontSize: "50px",
                }}
              />
              <FaArrowAltCircleDown
                onTouchStart={() => (controls.backward = true)}
                onTouchEnd={() => (controls.backward = false)}
                style={{
                  fontSize: "50px",
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CarScene;
