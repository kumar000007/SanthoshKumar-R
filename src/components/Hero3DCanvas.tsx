import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglAvailable, setWebglAvailable] = useState<boolean>(true);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL support
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglAvailable(false);
        return;
      }
    } catch {
      setWebglAvailable(false);
      return;
    }

    let animationFrameId: number;
    let isVisible = true;

    // Scene, Camera, Renderer
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    const canvas = renderer.domElement;
    canvas.className = 'w-full h-full object-contain cursor-grab active:cursor-grabbing';
    canvas.setAttribute('role', 'img');
    canvas.setAttribute('aria-label', 'Interactive 3D Data & AI Neural Sphere');
    container.innerHTML = '';
    container.appendChild(canvas);

    // Context loss handlers
    const onContextLost = (e: Event) => {
      e.preventDefault();
      setWebglAvailable(false);
      cancelAnimationFrame(animationFrameId);
    };
    const onContextRestored = () => {
      setWebglAvailable(true);
    };
    canvas.addEventListener('webglcontextlost', onContextLost);
    canvas.addEventListener('webglcontextrestored', onContextRestored);

    // Lighting: Three-point luxury lighting
    const ambientLight = new THREE.AmbientLight(0x0a192f, 2.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x38bdf8, 3.2); // Electric Cyan
    keyLight.position.set(5, 5, 4);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x818cf8, 2.8, 20); // Indigo/Purple
    fillLight.position.set(-5, -3, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 2.0); // Crisp White Rim
    rimLight.position.set(0, -6, -4);
    scene.add(rimLight);

    // Group for mouse interaction
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Core: High-Tech Icosahedron Lattice
    const coreGeometry = new THREE.IcosahedronGeometry(1.5, 2);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0f172a,
      metalness: 0.9,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
      transmission: 0.4,
      opacity: 0.95,
      transparent: true
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreMesh);

    // 2. Wireframe Overlay
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const wireframeMesh = new THREE.Mesh(coreGeometry, wireframeMat);
    wireframeMesh.scale.setScalar(1.002);
    mainGroup.add(wireframeMesh);

    // 3. Inner Pulsing Energy Core
    const innerCoreGeo = new THREE.OctahedronGeometry(0.85, 1);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0x67e8f9,
      wireframe: true,
      transparent: true,
      opacity: 0.75
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    mainGroup.add(innerCoreMesh);

    // 4. Orbital Rings (Data science & Full stack duality)
    const ringGroup = new THREE.Group();
    mainGroup.add(ringGroup);

    const ring1Geo = new THREE.TorusGeometry(2.2, 0.015, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ringGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.5, 0.012, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x7e22ce,
      emissiveIntensity: 0.5
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 3.5;
    ring2.rotation.x = -Math.PI / 6;
    ringGroup.add(ring2);

    const ring3Geo = new THREE.TorusGeometry(2.8, 0.01, 16, 100);
    const ring3Mat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.5
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.z = Math.PI / 4;
    ringGroup.add(ring3);

    // 5. Constellation Neural Data Particles
    const particleCount = 450;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 1.8 + Math.random() * 1.5;

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
      particleScales[i] = Math.random() * 0.04 + 0.02;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Particle sprite using canvas texture
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 32;
    pCanvas.height = 32;
    const pCtx = pCanvas.getContext('2d')!;
    const gradient = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(56, 189, 248, 0.8)');
    gradient.addColorStop(1, 'rgba(56, 189, 248, 0)');
    pCtx.fillStyle = gradient;
    pCtx.fillRect(0, 0, 32, 32);

    const pTexture = new THREE.CanvasTexture(pCanvas);
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.12,
      map: pTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particles);

    // Interactive mouse tracking
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;
    let isMouseDown = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      if (isMouseDown) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;
        previousMousePosition = { x: e.clientX, y: e.clientY };
      } else {
        targetRotationY = x * 0.6;
        targetRotationX = -y * 0.6;
      }
    };

    const handlePointerDown = (e: MouseEvent) => {
      isMouseDown = true;
      setIsInteracting(true);
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      isMouseDown = false;
      setIsInteracting(false);
    };

    // Scroll influence
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY * 0.001;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mouseup', handlePointerUp);

    // Touch support for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
        targetRotationY = x * 0.5;
        targetRotationX = -y * 0.5;
      }
    };
    container.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Resize Observer
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Intersection Observer to stop rendering when scrolled out of view (saves battery/GPU)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Damping / Lerp mouse interaction
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;

      mainGroup.rotation.x = currentRotationX + scrollY * 0.8;
      mainGroup.rotation.y = currentRotationY + elapsedTime * 0.15;

      // Pulse and rotate core elements
      const scalePulse = 1 + Math.sin(elapsedTime * 1.5) * 0.03;
      innerCoreMesh.scale.setScalar(scalePulse);
      innerCoreMesh.rotation.y -= 0.01;
      innerCoreMesh.rotation.x += 0.015;

      ring1.rotation.z += 0.005;
      ring2.rotation.z -= 0.004;
      ring3.rotation.z += 0.002;

      particles.rotation.y -= 0.002;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      container.removeEventListener('mousemove', handlePointerMove);
      container.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mouseup', handlePointerUp);
      container.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('webglcontextlost', onContextLost);
      canvas.removeEventListener('webglcontextrestored', onContextRestored);
      renderer.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      wireframeMat.dispose();
      innerCoreGeo.dispose();
      innerCoreMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      pTexture.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[440px] md:h-[500px] lg:h-[540px] flex items-center justify-center">
      {/* Background ambient glow */}
      <div
        className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #0284c7 0%, #6366f1 40%, transparent 70%)'
        }}
      />

      {/* 3D WebGL Container */}
      {webglAvailable ? (
        <div ref={mountRef} className="w-full h-full relative" />
      ) : (
        /* Graceful fallback for non-WebGL devices */
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
          <div className="w-48 h-48 rounded-full border border-cyan-500/30 flex items-center justify-center bg-cyan-950/20 backdrop-blur-md relative animate-pulse">
            <div className="w-36 h-36 rounded-full border border-indigo-500/40 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-cyan-400/20 blur-sm" />
            </div>
          </div>
          <span className="text-xs text-slate-400 mt-4 font-mono">Neural Intelligence Lattice</span>
        </div>
      )}

      {/* Interactive Drag Hint */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none">
        <span className="text-[11px] font-mono tracking-wider text-slate-400/80 bg-slate-900/70 border border-slate-700/50 px-3 py-1 rounded-md backdrop-blur-sm shadow-sm transition-opacity duration-300">
          {isInteracting ? 'Orienting 3D System' : 'Interactive · Drag to Rotate 3D Core'}
        </span>
      </div>
    </div>
  );
};
