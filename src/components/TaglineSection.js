import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const TaglineSection = () => {
  const mountRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // Create Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Position camera
    camera.position.z = 5;

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;

    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      // Create a spread out field of particles
      posArray[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    // Purple-ish material for particles
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x9c27b0,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    // Create particle system
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Add subtle ambient light
    const ambientLight = new THREE.AmbientLight(0xb388ff, 0.5);
    scene.add(ambientLight);

    // Add directional light for better depth
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Animation function
    const animate = () => {
      particlesMesh.rotation.x += 0.0003;
      particlesMesh.rotation.y += 0.0005;

      // Get scroll position to move particles slightly with scroll
      const scrollY = window.scrollY || window.pageYOffset;
      particlesMesh.position.y = scrollY * -0.001;

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Responsive handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Three.js container - positioned absolutely to overlay content */}
      <div
        ref={mountRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 flex flex-col items-center w-full">
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          <div className="mt-2 w-40 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
        </div>

        {/* Luxury quotation marks */}
        <div className="relative">
          <span className="absolute -top-16 -left-4 text-8xl text-purple-100 font-serif opacity-60">
            "
          </span>
          <span className="absolute -bottom-40 -right-4 text-8xl text-purple-100 font-serif opacity-60">
            "
          </span>

          {/* Main content with enhanced typography */}
          <div className="text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-wide text-purple-600 mb-8">
              <span className="relative inline-block">
                Creating Magical Moments
                <div className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
              </span>
              <span className="block mt-4">That Last Forever</span>
            </h2>

            <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto tracking-wide">
              At{" "}
              <span className="italic font-normal text-purple-700">
                Ember Events
              </span>
              , we transform your vision into a masterpiece of memories. From
              intimate gatherings to grand celebrations, our attention to detail
              and personalized approach ensures every event is uniquely{" "}
              <span className="italic font-normal">yours</span>.
            </p>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="mt-16 flex items-center justify-center">
          <div className="flex items-center">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-300"></div>
            <div className="mx-4">
              <div className="w-2 h-2 rounded-full border border-purple-300 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-purple-400"></div>
              </div>
            </div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-300"></div>
          </div>
        </div>

        {/* Premium features listing */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="mb-2 flex justify-center">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-all duration-300">
                <span className="text-purple-600 text-xl font-serif">01</span>
              </div>
            </div>
            <h3 className="text-lg font-medium text-purple-700 mb-1">
              Exclusive Experiences
            </h3>
            <p className="text-gray-500 text-sm font-light">
              Tailored with sophistication
            </p>
          </div>

          <div className="group">
            <div className="mb-2 flex justify-center">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-all duration-300">
                <span className="text-purple-600 text-xl font-serif">02</span>
              </div>
            </div>
            <h3 className="text-lg font-medium text-purple-700 mb-1">
              Meticulous Planning
            </h3>
            <p className="text-gray-500 text-sm font-light">
              Refined to perfection
            </p>
          </div>

          <div className="group">
            <div className="mb-2 flex justify-center">
              <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-all duration-300">
                <span className="text-purple-600 text-xl font-serif">03</span>
              </div>
            </div>
            <h3 className="text-lg font-medium text-purple-700 mb-1">
              Prestigious Service
            </h3>
            <p className="text-gray-500 text-sm font-light">
              Beyond expectations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaglineSection;
