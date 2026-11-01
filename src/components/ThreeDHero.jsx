import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./ThreeDHero.css";

// Generate deterministic particle coordinates once at module level
const PARTICLE_COUNT = 60;
const PARTICLE_POSITIONS = new Float32Array(PARTICLE_COUNT * 3);
for (let i = 0; i < PARTICLE_COUNT; i++) {
  const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT);
  const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;
  const radius = 2.0 + (i % 5) * 0.12;

  PARTICLE_POSITIONS[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
  PARTICLE_POSITIONS[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
  PARTICLE_POSITIONS[i * 3 + 2] = radius * Math.cos(phi);
}

// Check WebGL availability and motion preference deterministically
function checkWebGLSupport() {
  if (typeof window === "undefined") return false;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) return false;

  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

// Procedural 3D Geometric Hologram
function FuturisticCore({ mousePos, isLight }) {
  const outerMeshRef = useRef(null);
  const innerMeshRef = useRef(null);
  const ringRef = useRef(null);
  const particlesRef = useRef(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const targetY = Math.sin(t * 1.2) * 0.12;

    // Outer wireframe icosahedron rotation & gentle mouse tilt
    if (outerMeshRef.current) {
      outerMeshRef.current.rotation.x += delta * 0.25;
      outerMeshRef.current.rotation.y += delta * 0.35;
      outerMeshRef.current.position.y = targetY;

      outerMeshRef.current.rotation.x +=
        (mousePos.y * 0.3 - outerMeshRef.current.rotation.x * 0.1) * 0.05;
      outerMeshRef.current.rotation.y +=
        (mousePos.x * 0.3 - outerMeshRef.current.rotation.y * 0.1) * 0.05;
    }

    // Inner metallic faceted core rotation
    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.x -= delta * 0.3;
      innerMeshRef.current.rotation.y -= delta * 0.4;
      innerMeshRef.current.position.y = targetY;
    }

    // Outer orbital ring rotation
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.2;
      ringRef.current.rotation.x = 1.1 + Math.sin(t * 0.5) * 0.1;
      ringRef.current.position.y = targetY;
    }

    // Orbiting particles rotation
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.18;
      particlesRef.current.position.y = targetY;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Outer Wireframe Icosahedron */}
      <mesh ref={outerMeshRef}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial
          color={isLight ? "#6d28d9" : "#a78bfa"}
          wireframe
          transparent
          opacity={isLight ? 0.8 : 0.65}
          emissive={isLight ? "#7c3aed" : "#7c3aed"}
          emissiveIntensity={isLight ? 0.4 : 0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Inner Glowing Crystal Core */}
      <mesh ref={innerMeshRef}>
        <octahedronGeometry args={[0.85, 0]} />
        <meshPhysicalMaterial
          color={isLight ? "#0369a1" : "#1e1b4b"}
          emissive={isLight ? "#0284c7" : "#67e8f9"}
          emissiveIntensity={isLight ? 0.6 : 0.8}
          roughness={0.12}
          metalness={0.88}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={0.9}
        />
      </mesh>

      {/* Futuristic Orbiting Rings */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.9, 0.02, 16, 100]} />
        <meshStandardMaterial
          color={isLight ? "#0284c7" : "#22d3ee"}
          emissive={isLight ? "#0369a1" : "#06b6d4"}
          emissiveIntensity={isLight ? 0.5 : 0.9}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Orbiting Particle Swarm */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={PARTICLE_COUNT}
            array={PARTICLE_POSITIONS}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={isLight ? 0.07 : 0.06}
          color={isLight ? "#7c3aed" : "#c4b5fd"}
          transparent
          opacity={isLight ? 0.8 : 0.75}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

// Lightweight CSS 3D Fallback
function Fallback3D() {
  return (
    <div className="fallback-3d-wrapper" aria-label="3D Abstract Visual">
      <div className="hologram-orb">
        <div className="hologram-ring ring-1" />
        <div className="hologram-ring ring-2" />
        <div className="hologram-core">
          <span className="core-code">&lt;SD /&gt;</span>
        </div>
      </div>
      <div className="hologram-caption">Intelligent Systems · GenAI · Security</div>
    </div>
  );
}

// Error Boundary for WebGL canvas robustness
class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("3D Canvas initialization handled gracefully:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function ThreeDHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [canRender3D] = useState(() => checkWebGLSupport());
  const [isLight, setIsLight] = useState(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.getAttribute("data-theme") !== "dark";
    }
    return true;
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      setIsLight(currentTheme !== "dark");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setMousePos({ x, y });
  };

  return (
    <div
      className="three-d-hero-container"
      onMouseMove={handleMouseMove}
      aria-label="Interactive 3D Core"
    >
      {canRender3D ? (
        <CanvasErrorBoundary fallback={<Fallback3D />}>
          <Suspense fallback={<Fallback3D />}>
            <Canvas
              className="webgl-canvas"
              camera={{ position: [0, 0, 4.2], fov: 45 }}
              dpr={[1, 1.5]}
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance",
              }}
            >
              {/* Studio Lighting */}
              <ambientLight intensity={isLight ? 1.2 : 0.8} />
              <pointLight
                position={[3, 3, 3]}
                intensity={isLight ? 2.8 : 2.2}
                color={isLight ? "#7c3aed" : "#8b5cf6"}
              />
              <pointLight
                position={[-3, -2, -2]}
                intensity={isLight ? 2.8 : 2.4}
                color={isLight ? "#0284c7" : "#22d3ee"}
              />
              <directionalLight position={[0, 4, 2]} intensity={isLight ? 1.6 : 1.2} color="#ffffff" />
              <FuturisticCore mousePos={mousePos} isLight={isLight} />
            </Canvas>
          </Suspense>
        </CanvasErrorBoundary>
      ) : (
        <Fallback3D />
      )}
    </div>
  );
}

export default ThreeDHero;
