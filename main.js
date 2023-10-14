
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import './style.scss'

const canvas = document.getElementById("scene");
const elem = document.querySelector('.overlay');

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio( window.devicePixelRatio );

  const controls = new OrbitControls(camera, renderer.domElement);
  camera.position.z= 75;
controls.update();
controls.autoRotate = true;

  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.5;
  scene.rotation.x = 0.5; 
  
  const ambientLight = new THREE.AmbientLight(0xffffff, 3.5);
  scene.add(ambientLight);
  
  const pointLight = new THREE.PointLight(0xffffff, 1, 100);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

const hdris = [
  '/st_peters.hdr',
  '/zavelstein_4k.hdr',
  '/snowy_hillside.hdr',
  '/church_square_4k.hdr',
  '/blaubeuren_night_4k.hdr',
  '/studio_garden.hdr',
  '/netball_court_4k.hdr',
  '/abandoned_workshop.hdr',
  '/dry_cracked_lake.hdr',
  '/photo_studio.hdr',
  '/amphitheatre_zanzibar.hdr',
  '/drachenfels_cellar.hdr',
  '/pretville_street.hdr',
  '/shanghai_bund.hdr',
  '/trekker_monument.hdr',
]

const images = [
  'https://images.unsplash.com/photo-1624715153088-8f2b8478cfb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
  'https://images.unsplash.com/photo-1487734092093-e5b02908580e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
  'https://images.unsplash.com/photo-1507617470622-e254a32975d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
  'https://images.unsplash.com/photo-1534637810397-1acee982a12e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2835&q=80',
  'https://images.unsplash.com/photo-1441100094486-eff37b2c8e19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2362&q=80',
  'https://images.unsplash.com/photo-1548661710-7f540c9c56d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
  'https://images.unsplash.com/photo-1595614007536-6e6a8ef82139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNjZW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  'https://images.unsplash.com/photo-1600720898276-44112182efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
  'https://images.unsplash.com/photo-1604950692682-ab0a4740abc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
  'https://images.unsplash.com/photo-1599925355535-2d7385f1cccc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
  'https://images.unsplash.com/photo-1606423213493-2298fd1fa990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
  'https://images.unsplash.com/photo-1621788051568-dd6bbe1f2f5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
  'https://images.unsplash.com/photo-1558388556-2261d4cc1938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVudmlyb25tZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
]

let currentHdriIndex = 0;
let loadedHdris = [];

hdris.forEach((hdriPath, index) => {
  new RGBELoader().load(hdriPath, (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      loadedHdris[index] = texture;
      if (index === 0) {
          scene.background = texture;
          scene.environment = texture;
      }
  });
});


const ring = new THREE.Mesh(
  new THREE.TorusGeometry(10, 3, 16, 100),
  new THREE.MeshStandardMaterial({
    roughness: 0,
    metalness: 1, 
    color:0xd4af37
  })
)
const ico = new THREE.Mesh(
  new THREE.IcosahedronGeometry(14, 0),
  new THREE.MeshStandardMaterial({
    roughness: 0,
    metalness: 1, 
    color:0xb9f2ff,
  })
)

const torus = new THREE.Mesh(
  new THREE.TorusKnotGeometry(10, 3, 100, 16),
  new THREE.MeshStandardMaterial({
    roughness: 0,
    metalness: 1, 
    color:0xaaa9ad
  })
)

scene.add(ring)
scene.add(ico)
scene.add(torus)

const gui = new GUI();
gui.add(renderer, 'toneMappingExposure', 0, 2).name('exposure');

function animate(msTime) {
  const time = msTime / 1000;
    renderer.render(scene, camera);
    ring.rotation.x += 0.01;
    ring.rotation.y += 0.01;
    ring.rotation.z += 0.01;

    ico.position.x = Math.cos( time ) * 30;
				ico.position.y = Math.sin( time ) * 30;
				ico.position.z = Math.sin( time ) * 30;

    ico.rotation.x += 0.02;
    ico.rotation.y += 0.03;
    
    torus.position.x = Math.cos( time + 10 ) * 30;
				torus.position.y = Math.sin( time + 10 ) * 30;
				torus.position.z = Math.sin( time + 10 ) * 30;


    torus.rotation.x += 0.02;
  torus.rotation.y += 0.03;
  
    controls.update();
}
  renderer.setAnimationLoop(animate);


window.addEventListener('resize', function() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
});


function getRandomColor() {
  const getLightValue = () => {
    const min = 200; 
    const max = 255;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const r = getLightValue();
const g = getLightValue();
const b = getLightValue();

return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}

hdris.forEach((item, index) => {
  let color = getRandomColor();
  const div = document.createElement("div");
  console.log(images[index])
  div.style.backgroundImage = `url('${images[index]}')`;
  div.style.backgroundColor = color;
  const text = item.slice(1, 7);
  const h2 = document.createElement("h2");
  h2.textContent = text;

  div.appendChild(h2);
  elem.appendChild(div)
})

window.document.addEventListener("click", (e) => {
  if (!e.target.classList.contains('.overlay')) {
    if (elem.classList.contains("animate__bounceInUp")) {
      elem.classList.remove("animate__bounceInUp")
      elem.classList.add("animate__bounceOutDown")
    }
    else {
      elem.classList.add("animate__bounceOutDown")
    }
  }
})

window.document.addEventListener("keyup", () => {
  if (elem.classList.contains("animate__bounceOutDown")) {
    elem.classList.remove("animate__bounceOutDown")
    elem.classList.add("animate__bounceInUp")
  }
  else {
    elem.classList.add("animate__bounceInUp")
  }
})

const scenes = document.querySelectorAll('.overlay div');
console.log(scenes)

scenes.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (loadedHdris[index]) {
        scene.background = loadedHdris[index];
        scene.environment = loadedHdris[index];
    } else {
        console.warn('HDRI not yet loaded. Please try again in a moment.');
    } 
  })
})