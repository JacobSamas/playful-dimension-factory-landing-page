import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, Float, Text3D, MeshDistortMaterial, Sphere, useCursor } from '@react-three/drei';
import { Vector3 } from 'three';
import { motion } from 'framer-motion-3d';

const FloatingElements = () => {
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  
  return (
    <group>
      {/* Floating spheres with distortion */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[1, 32, 32]} position={[-3, 0, 0]}>
          <MeshDistortMaterial
            color="#ff00ff"
            attach="material"
            distort={0.5}
            speed={2}
            roughness={0}
          />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <Sphere args={[0.8, 32, 32]} position={[3, 1, -2]}>
          <MeshDistortMaterial
            color="#00ffff"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0}
          />
        </Sphere>
      </Float>
    </group>
  );
};

const InteractiveText = () => {
  const textRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Text3D
      ref={textRef}
      font="/fonts/helvetiker_regular.typeface.json"
      size={0.5}
      height={0.2}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.02}
      bevelSize={0.02}
      bevelOffset={0}
      bevelSegments={5}
      position={[0, 2, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      Dimension Factory
      <meshStandardMaterial color={hovered ? "#ff00ff" : "#ffffff"} />
    </Text3D>
  );
};

const MouseFollower = () => {
  const { viewport, mouse } = useThree();
  const ref = useRef();
  
  useFrame(() => {
    if (ref.current) {
      const x = (mouse.x * viewport.width) / 2;
      const y = (mouse.y * viewport.height) / 2;
      ref.current.position.lerp(new Vector3(x, y, 0), 0.1);
    }
  });

  return (
    <Sphere ref={ref} args={[0.2, 32, 32]}>
      <meshStandardMaterial color="#ffffff" emissive="#ff00ff" emissiveIntensity={2} />
    </Sphere>
  );
};

const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <group position={[0, -2, 0]}>
      <Sphere args={[1, 32, 32]}>
        <MeshDistortMaterial
          color="#ffffff"
          attach="material"
          distort={progress / 50}
          speed={2}
          roughness={0}
        />
      </Sphere>
    </group>
  );
};

const EnhancedScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ background: 'black' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Environment preset="city" />
      
      <FloatingElements />
      <InteractiveText />
      <MouseFollower />
      <LoadingAnimation />
    </Canvas>
  );
};

export default EnhancedScene; 