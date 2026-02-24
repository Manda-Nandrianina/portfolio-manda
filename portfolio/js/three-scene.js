// ========================================
// THREE.JS SCENE - HOMME 3D REALISTE
// Auteur: Manda Nandrianina
// Description: Scène 3D avec homme assis devant ordinateur
// ========================================

import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.128.0/examples/jsm/controls/OrbitControls.js';

document.addEventListener('DOMContentLoaded', init3DScene);

function init3DScene() {
    const container = document.getElementById('canvas-container-3d');
    if (!container) return;
    
    // --- Configuration de base ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f0f0f); // Même que fond du site
    
    // --- Caméra (angle 3/4) ---
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(3, 1.8, 4); // x: droite/gauche, y: haut/bas, z: profondeur
    camera.lookAt(0, 1, 0);
    
    // --- Rendu ---
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Ombres douces
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    
    container.appendChild(renderer.domElement);
    
    // --- Contrôles (optionnel, pour le parallax) ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.maxPolarAngle = Math.PI / 2; // Empêche de voir sous la scène
    controls.minPolarAngle = 0.5;
    controls.autoRotate = false;
    controls.target.set(0, 1.2, 0);
    
    // --- Lumières ---
    
    // Lumière ambiante (base)
    const ambientLight = new THREE.AmbientLight(0x404060);
    scene.add(ambientLight);
    
    // Lumière principale (comme fenêtre)
    const mainLight = new THREE.DirectionalLight(0xffeedd, 1.5);
    mainLight.position.set(2, 3, 4);
    mainLight.castShadow = true;
    mainLight.receiveShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    const d = 5;
    mainLight.shadow.camera.left = -d;
    mainLight.shadow.camera.right = d;
    mainLight.shadow.camera.top = d;
    mainLight.shadow.camera.bottom = -d;
    mainLight.shadow.camera.near = 1;
    mainLight.shadow.camera.far = 10;
    mainLight.shadow.bias = -0.0005;
    scene.add(mainLight);
    
    // Lumière secondaire (fill, chaude)
    const fillLight = new THREE.DirectionalLight(0xffccaa, 0.8);
    fillLight.position.set(-2, 1, 2);
    scene.add(fillLight);
    
    // Lumière d'accentuation (dos)
    const backLight = new THREE.DirectionalLight(0x6688ff, 0.5);
    backLight.position.set(-1, 2, -3);
    scene.add(backLight);
    
    // Lumière de table (pour l'écran)
    const tableLight = new THREE.PointLight(0x88aaff, 0.3);
    tableLight.position.set(0, 1.5, 0.8);
    scene.add(tableLight);
    
    // --- Création de la scène avec primitives (car pas de modèle externe) ---
    // C'est une approximation réaliste avec des formes de base
    // Pour un modèle réel, il faudrait charger un GLB
    
    // Sol (plancher)
    const floorGeometry = new THREE.CircleGeometry(5, 32);
    const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.7, metalness: 0.1 });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    floor.receiveShadow = true;
    scene.add(floor);
    
    // Mur de fond (léger)
    const wallGeometry = new THREE.PlaneGeometry(8, 4);
    const wallMaterial = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, emissive: 0x111122, roughness: 0.5 });
    const wall = new THREE.Mesh(wallGeometry, wallMaterial);
    wall.position.set(0, 2, -2.5);
    wall.receiveShadow = true;
    scene.add(wall);
    
    // --- Table ---
    const tableTopGeo = new THREE.BoxGeometry(2, 0.1, 1.2);
    const tableTopMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.4, metalness: 0.2 });
    const tableTop = new THREE.Mesh(tableTopGeo, tableTopMat);
    tableTop.position.set(0, 0.75, 0);
    tableTop.castShadow = true;
    tableTop.receiveShadow = true;
    scene.add(tableTop);
    
    // Pieds de table
    const legGeo = new THREE.BoxGeometry(0.1, 0.75, 0.1);
    const legMat = new THREE.MeshStandardMaterial({ color: 0x444444, roughness: 0.3 });
    
    const legPositions = [
        [-0.9, 0.375, -0.5],
        [0.9, 0.375, -0.5],
        [-0.9, 0.375, 0.5],
        [0.9, 0.375, 0.5]
    ];
    
    legPositions.forEach(pos => {
        const leg = new THREE.Mesh(legGeo, legMat);
        leg.position.set(pos[0], pos[1], pos[2]);
        leg.castShadow = true;
        leg.receiveShadow = true;
        scene.add(leg);
    });
    
    // --- Ordinateur portable ---
    // Base (clavier)
    const laptopBaseGeo = new THREE.BoxGeometry(1, 0.05, 0.8);
    const laptopBaseMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.3, metalness: 0.6 });
    const laptopBase = new THREE.Mesh(laptopBaseGeo, laptopBaseMat);
    laptopBase.position.set(0, 0.8, 0);
    laptopBase.castShadow = true;
    laptopBase.receiveShadow = true;
    scene.add(laptopBase);
    
    // Écran
    const screenGroup = new THREE.Group();
    screenGroup.position.set(0, 0.85, -0.35);
    
    const screenBackGeo = new THREE.BoxGeometry(0.9, 0.6, 0.03);
    const screenBackMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.2 });
    const screenBack = new THREE.Mesh(screenBackGeo, screenBackMat);
    screenBack.position.set(0, 0.3, 0);
    screenBack.castShadow = true;
    screenBack.receiveShadow = true;
    screenGroup.add(screenBack);
    
    // Écran lumineux
    const screenDisplayGeo = new THREE.BoxGeometry(0.8, 0.45, 0.02);
    const screenDisplayMat = new THREE.MeshStandardMaterial({ 
        color: 0x88aaff, 
        emissive: 0x224488,
        roughness: 0.1,
        metalness: 0.1
    });
    const screenDisplay = new THREE.Mesh(screenDisplayGeo, screenDisplayMat);
    screenDisplay.position.set(0, 0.3, 0.03);
    screenDisplay.castShadow = true;
    screenDisplay.receiveShadow = true;
    screenGroup.add(screenDisplay);
    
    screenGroup.rotation.x = 0.3; // Incliné
    scene.add(screenGroup);
    
    // --- Chaise ---
    // Assise
    const seatGeo = new THREE.BoxGeometry(0.8, 0.1, 0.8);
    const seatMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.8 });
    const seat = new THREE.Mesh(seatGeo, seatMat);
    seat.position.set(0, 0.45, 0.6);
    seat.castShadow = true;
    seat.receiveShadow = true;
    scene.add(seat);
    
    // Dossier
    const backrestGeo = new THREE.BoxGeometry(0.8, 0.6, 0.1);
    const backrestMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.8 });
    const backrest = new THREE.Mesh(backrestGeo, backrestMat);
    backrest.position.set(0, 0.8, 1.0);
    backrest.castShadow = true;
    backrest.receiveShadow = true;
    scene.add(backrest);
    
    // Pieds chaise
    const chairLegGeo = new THREE.BoxGeometry(0.1, 0.45, 0.1);
    const chairLegMat = new THREE.MeshStandardMaterial({ color: 0x666666, roughness: 0.4, metalness: 0.5 });
    
    const chairLegPositions = [
        [-0.35, 0.225, 0.25],
        [0.35, 0.225, 0.25],
        [-0.35, 0.225, 0.95],
        [0.35, 0.225, 0.95]
    ];
    
    chairLegPositions.forEach(pos => {
        const leg = new THREE.Mesh(chairLegGeo, chairLegMat);
        leg.position.set(pos[0], pos[1], pos[2]);
        leg.castShadow = true;
        leg.receiveShadow = true;
        scene.add(leg);
    });
    
    // --- Personnage (homme assis) ---
    const characterGroup = new THREE.Group();
    characterGroup.position.set(0, 0.45, 0.6);
    
    // Corps (torso)
    const torsoGeo = new THREE.CylinderGeometry(0.3, 0.35, 0.8, 8);
    const torsoMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.7 }); // T-shirt noir
    const torso = new THREE.Mesh(torsoGeo, torsoMat);
    torso.position.set(0, 0.6, 0);
    torso.castShadow = true;
    torso.receiveShadow = true;
    characterGroup.add(torso);
    
    // Tête
    const headGeo = new THREE.SphereGeometry(0.2, 32, 16);
    const headMat = new THREE.MeshStandardMaterial({ color: 0xeeddcc, roughness: 0.3 });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.set(0, 1.1, 0);
    head.castShadow = true;
    head.receiveShadow = true;
    characterGroup.add(head);
    
    // Yeux (petits)
    const eyeGeo = new THREE.SphereGeometry(0.04, 8);
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    
    const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
    eyeL.position.set(-0.08, 1.15, 0.15);
    characterGroup.add(eyeL);
    
    const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
    eyeR.position.set(0.08, 1.15, 0.15);
    characterGroup.add(eyeR);
    
    // Pupilles
    const pupilGeo = new THREE.SphereGeometry(0.02, 6);
    const pupilMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
    
    const pupilL = new THREE.Mesh(pupilGeo, pupilMat);
    pupilL.position.set(-0.08, 1.15, 0.19);
    characterGroup.add(pupilL);
    
    const pupilR = new THREE.Mesh(pupilGeo, pupilMat);
    pupilR.position.set(0.08, 1.15, 0.19);
    characterGroup.add(pupilR);
    
    // Bras
    // Bras gauche
    const leftArmGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.6, 6);
    const armMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.7 });
    const leftArm = new THREE.Mesh(leftArmGeo, armMat);
    leftArm.position.set(-0.4, 0.8, 0.1);
    leftArm.rotation.z = 0.3;
    leftArm.rotation.x = -0.2;
    leftArm.castShadow = true;
    leftArm.receiveShadow = true;
    characterGroup.add(leftArm);
    
    // Avant-bras gauche
    const leftForearmGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.4, 6);
    const leftForearm = new THREE.Mesh(leftForearmGeo, armMat);
    leftForearm.position.set(-0.65, 0.6, 0.25);
    leftForearm.rotation.z = 0.8;
    leftForearm.rotation.x = -0.5;
    leftForearm.castShadow = true;
    leftForearm.receiveShadow = true;
    characterGroup.add(leftForearm);
    
    // Main gauche (sur clavier)
    const leftHandGeo = new THREE.SphereGeometry(0.1, 6);
    const leftHand = new THREE.Mesh(leftHandGeo, new THREE.MeshStandardMaterial({ color: 0xeeddcc }));
    leftHand.position.set(-0.8, 0.5, 0.4);
    leftHand.castShadow = true;
    leftHand.receiveShadow = true;
    characterGroup.add(leftHand);
    
    // Bras droit
    const rightArmGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.6, 6);
    const rightArm = new THREE.Mesh(rightArmGeo, armMat);
    rightArm.position.set(0.4, 0.8, 0.1);
    rightArm.rotation.z = -0.3;
    rightArm.rotation.x = -0.2;
    rightArm.castShadow = true;
    rightArm.receiveShadow = true;
    characterGroup.add(rightArm);
    
    // Avant-bras droit
    const rightForearmGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.4, 6);
    const rightForearm = new THREE.Mesh(rightForearmGeo, armMat);
    rightForearm.position.set(0.65, 0.6, 0.25);
    rightForearm.rotation.z = -0.8;
    rightForearm.rotation.x = -0.5;
    rightForearm.castShadow = true;
    rightForearm.receiveShadow = true;
    characterGroup.add(rightForearm);
    
    // Main droite (sur souris)
    const rightHandGeo = new THREE.SphereGeometry(0.1, 6);
    const rightHand = new THREE.Mesh(rightHandGeo, new THREE.MeshStandardMaterial({ color: 0xeeddcc }));
    rightHand.position.set(0.8, 0.5, 0.4);
    rightHand.castShadow = true;
    rightHand.receiveShadow = true;
    characterGroup.add(rightHand);
    
    // Jambes
    // Jambe gauche (pantalon bleu)
    const legLeftGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.6, 6);
    const legMatBlue = new THREE.MeshStandardMaterial({ color: 0x2a4b7c, roughness: 0.6 }); // Jean bleu
    const legLeft = new THREE.Mesh(legLeftGeo, legMatBlue);
    legLeft.position.set(-0.2, 0.2, 0);
    legLeft.castShadow = true;
    legLeft.receiveShadow = true;
    characterGroup.add(legLeft);
    
    // Jambe droite
    const legRight = new THREE.Mesh(legLeftGeo, legMatBlue);
    legRight.position.set(0.2, 0.2, 0);
    legRight.castShadow = true;
    legRight.receiveShadow = true;
    characterGroup.add(legRight);
    
    scene.add(characterGroup);
    
    // --- Éléments décoratifs ---
    // Livre/carnet
    const bookGeo = new THREE.BoxGeometry(0.3, 0.05, 0.4);
    const bookMat = new THREE.MeshStandardMaterial({ color: 0x8b5cf6, roughness: 0.4 });
    const book = new THREE.Mesh(bookGeo, bookMat);
    book.position.set(0.6, 0.8, -0.6);
    book.rotation.y = 0.3;
    book.castShadow = true;
    book.receiveShadow = true;
    scene.add(book);
    
    // Tasse
    const cupGeo = new THREE.CylinderGeometry(0.1, 0.08, 0.15, 8);
    const cupMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 });
    const cup = new THREE.Mesh(cupGeo, cupMat);
    cup.position.set(-0.7, 0.85, -0.5);
    cup.castShadow = true;
    cup.receiveShadow = true;
    scene.add(cup);
    
    // --- Animation ---
    let time = 0;
    
    function animate() {
        requestAnimationFrame(animate);
        
        time += 0.01;
        
        // Animation légère des épaules (respiration)
        if (characterGroup) {
            characterGroup.position.y = 0.45 + Math.sin(time * 2) * 0.01;
        }
        
        // Animation de la tête (léger mouvement)
        if (head) {
            head.rotation.y = Math.sin(time * 1.5) * 0.05;
            head.rotation.x = Math.sin(time * 1.2) * 0.02;
        }
        
        // Animation des mains (typing)
        if (leftHand) {
            leftHand.position.y = 0.5 + Math.sin(time * 8) * 0.02;
            leftHand.position.x = -0.8 + Math.sin(time * 5) * 0.01;
        }
        
        if (rightHand) {
            rightHand.position.y = 0.5 + Math.sin(time * 7 + 2) * 0.02;
            rightHand.position.x = 0.8 + Math.sin(time * 4 + 1) * 0.01;
        }
        
        // Animation de l'écran (lueur pulsante)
        if (screenDisplay) {
            const glow = 0.2 + Math.sin(time * 3) * 0.1;
            screenDisplay.material.emissive.setHSL(0.6, 0.8, glow * 0.3);
        }
        
        // Parallax léger avec la souris
        // (optionnel, on utilise OrbitControls avec damping)
        
        controls.update(); // Pour le damping
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // --- Gestion du redimensionnement ---
    window.addEventListener('resize', onWindowResize, false);
    
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    // --- Interaction souris pour parallax subtil (alternative) ---
    document.addEventListener('mousemove', (event) => {
        const mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
        const mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
        
        // Léger déplacement de la cible de la caméra
        controls.target.x = mouseX * 0.1;
        controls.target.y = 1.2 + mouseY * 0.05;
    });
}