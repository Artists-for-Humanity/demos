import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color("#000");

const camera = new THREE.PerspectiveCamera(
    5,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 2, 10);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

controls.maxPolarAngle = Math.PI / 4;
controls.minPolarAngle = Math.PI / 4;
controls.update();

const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

const loader = new GLTFLoader();
const radius = 0.5;
const models = ['assets/ramen1.glb', 'assets/ramen2.glb', 'assets/ramen3.glb', 'assets/ramen4.glb'];
const loadedModels = [];

let defX = null
let defY = null
let id = [];
let text = ["Ramen #1", "Ramen #2", "Ramen #3", "Ramen #4"];

models.forEach((modelPath, index) => {
    loader.load(
        modelPath,
        (gltf) => {
            const model = gltf.scene;
            scene.add(model);

            loadedModels.push(model);

            const angle = (index / models.length) * Math.PI * 2;

            model.position.set(
                Math.cos(angle) * radius,
                0,
                Math.sin(angle) * radius
            );

            if (modelPath === 'assets/ramen2.glb') {
                model.scale.set(0.15, 0.15, 0.15);
            }
            if (modelPath === 'assets/ramen3.glb') {
                model.scale.set(2.75, 2.75, 2.75);
            }
            if (modelPath === 'assets/ramen4.glb') {
                model.scale.set(0.35, 0.35, 0.35);
            }
        }
    );
});

function animate() {
    requestAnimationFrame(animate);
    loadedModels.forEach((model) => {
        model.rotation.y += 0.01;
    });

    controls.update();
    renderer.render(scene, camera);
}
animate();

document.addEventListener('mousemove', () => {
    loadedModels.forEach((model) => {
        const vector = new THREE.Vector3();
        model.getWorldPosition(vector);
        vector.project(camera);

        const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
        const y = (-vector.y * 0.5 + 0.5) * window.innerHeight;

        if(defX === null){
            defX = x
        }
        if(defY === null){
            defY = y
        }

        const threshold = 150;
        if (Math.abs(x - defX) < threshold && Math.abs(y - defY) < threshold) {
            changeText(model.uuid)
        }
    });
});

function changeText(model){
    if(!(id.includes(model))){
        id.push(model);
    }

    const idxModel = id.indexOf(model)
    const curText = text[idxModel]
    const defText = document.getElementById('text')

    defText.innerHTML = curText
}

