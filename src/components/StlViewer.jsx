'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

const StlViewer = ({ stlPath }) => {
	const containerRef = useRef(null);

	useEffect(() => {
		// Setup Three.js scene
		const scene = new THREE.Scene();

		// Add lights (ambient + spotlight)
		const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Soft ambient light
		scene.add(ambientLight);

		const spotLight = new THREE.SpotLight(0xffffff, 1.2); // Brighter spotlight for shininess
		spotLight.position.set(-0.2, -0.3, 1.3);
		scene.add(spotLight);
		//const spotLightHelper = new THREE.SpotLightHelper(spotLight);
		//scene.add(spotLightHelper);

		// Setup camera
		const camera = new THREE.PerspectiveCamera(
			75,
			containerRef.current.clientWidth / containerRef.current.clientHeight,
			0.1,
			1000,
		);
		camera.position.set(0.3, -0.3, 2.1); // Offset camera position (x, y, z)
		//const helper = new THREE.CameraHelper(camera);
		//scene.add(helper);

		// Initialize renderer with transparency
		const renderer = new THREE.WebGLRenderer({ alpha: true });
		renderer.setClearColor(0x000000, 0); // Transparent background
		renderer.setSize(
			containerRef.current.clientWidth,
			containerRef.current.clientHeight,
		);
		containerRef.current.appendChild(renderer.domElement);

		// Add OrbitControls
		const controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.dampingFactor = 0.2;

		// Load the STL file
		const loader = new STLLoader();
		loader.load(
			stlPath,
			(geometry) => {
				// Center and scale the geometry
				geometry.computeBoundingBox();
				const boundingBox = geometry.boundingBox;
				const center = new THREE.Vector3();
				boundingBox.getCenter(center).negate();
				geometry.translate(center.x, center.y, center.z);

				const size = new THREE.Vector3();
				boundingBox.getSize(size);
				const maxAxis = Math.max(size.x, size.y, size.z);
				geometry.scale(2 / maxAxis, 2 / maxAxis, 2 / maxAxis); // Fit within view

				// Create a shiny yellow mesh
				const material = new THREE.MeshStandardMaterial({
					opacity: 1,
					color: 0xf59e0b, // Bright green color (plastic)
					roughness: 1,
					metalness: 0.0,
					emissive: 0xf59e0b,
					emissiveIntensity: 0.5,
					clearcoat: 0.8, // Additional shine layer
					clearcoatRoughness: 0.2, // Keep it smooth
				});
				const mesh = new THREE.Mesh(geometry, material);

				// Apply tilt by rotating the mesh around a diagonal axis
				mesh.rotation.x = THREE.MathUtils.degToRad(30); // Tilt the mesh 30 degrees around X-axis

				scene.add(mesh);

				// Animate the scene
				const animate = () => {
					requestAnimationFrame(animate);

					// Rotate the mesh around the tilted axis (simulating Earth-like spin)
					mesh.rotation.x += 0.0; // Rotate around X-axis
					mesh.rotation.y += 0.005; // Rotate around Y-axis for a continuous spin

					controls.update();
					renderer.render(scene, camera);
				};
				animate();
			},
			undefined,
			(error) => {
				console.error('Error loading STL file:', error);
			},
		);

		// Clean up on unmount
		return () => {
			while (containerRef.current.firstChild) {
				containerRef.current.removeChild(containerRef.current.firstChild);
			}
		};
	}, [stlPath]);

	return (
		<div
			ref={containerRef}
			style={{
				width: '500px',
				height: '500px',
				background: 'none', // No background for the parent div
			}}
		/>
	);
};

export default StlViewer;
