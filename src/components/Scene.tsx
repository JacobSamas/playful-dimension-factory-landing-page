import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls, Text, useTexture, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Animated sphere component
interface AnimatedSphereProps {
  position: [number, number, number];
  color: string;
  speed: number;
  distort: boolean;
}

const AnimatedSphere: React.FC<AnimatedSphereProps> = ({ position, color, speed, distort }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * speed * 0.3) * 0.2;
      mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime() * speed * 0.2) * 0.2;
      mesh.current.position.y = Math.sin(state.clock.getElapsedTime() * speed) * 0.2 + position[1];
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <MeshDistortMaterial 
        color={color} 
        speed={distort ? 2 : 0} 
        distort={distort ? 0.4 : 0} 
        roughness={0.5}
        metalness={0.2}
      />
    </mesh>
  );
};

// Animated torus component
interface AnimatedTorusProps {
  position: [number, number, number];
  color: string;
  speed: number;
  rotation: [number, number, number];
}

const AnimatedTorus: React.FC<AnimatedTorusProps> = ({ position, color, speed, rotation }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * speed * rotation[0];
      mesh.current.rotation.y = state.clock.getElapsedTime() * speed * rotation[1];
      mesh.current.rotation.z = state.clock.getElapsedTime() * speed * rotation[2];
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <torusGeometry args={[1.5, 0.4, 16, 64]} />
      <meshPhongMaterial color={color} shininess={100} />
    </mesh>
  );
};

// Particles background
interface ParticleFieldProps {
  count?: number;
}

const ParticleField: React.FC<ParticleFieldProps> = ({ count = 100 }) => {
  const mesh = useRef<THREE.InstancedMesh>(null!);
  const { clock } = useThree();
  
  useEffect(() => {
    if (mesh.current) {
      const tempObject = new THREE.Object3D();
      for (let i = 0; i < count; i++) {
        const radius = 15;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        
        tempObject.position.x = radius * Math.sin(phi) * Math.cos(theta);
        tempObject.position.y = radius * Math.sin(phi) * Math.sin(theta);
        tempObject.position.z = radius * Math.cos(phi);
        
        tempObject.updateMatrix();
        mesh.current.setMatrixAt(i, tempObject.matrix);
      }
      mesh.current.instanceMatrix.needsUpdate = true;
    }
  }, [count]);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x = clock.getElapsedTime() * 0.05;
      mesh.current.rotation.y = clock.getElapsedTime() * 0.03;
    }
  });
  
  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="#8B5CF6" opacity={0.6} transparent />
    </instancedMesh>
  );
};

// Main 3D scene setup
const Scene3D: React.FC = () => {
  const controlsRef = useRef<any>(null);
  const { viewport } = useThree();
  const isMobile = viewport.width < 7.5;

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#8B5CF6" />
      
      <ParticleField count={200} />
      
      <AnimatedSphere 
        position={[isMobile ? -2 : -3, 0, 0]} 
        color="#8B5CF6" 
        speed={0.8} 
        distort={true}
      />
      
      <AnimatedSphere 
        position={[isMobile ? 2 : 3, 0, 0]} 
        color="#0EA5E9" 
        speed={0.5} 
        distort={false}
      />
      
      <AnimatedTorus 
        position={[0, isMobile ? -2 : -3, 0]} 
        color="#A894FC" 
        speed={0.2} 
        rotation={[0.5, 1, 0]}
      />
      
      <OrbitControls 
        ref={controlsRef} 
        enableZoom={false} 
        enablePan={false}
        autoRotate 
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
};

// Main component that exports the canvas
const Scene: React.FC = () => {
  return (
    <div className="h-screen w-full fixed top-0 left-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <Scene3D />
      </Canvas>
    </div>
  );
};

export default Scene; 