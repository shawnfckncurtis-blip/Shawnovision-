// demo/main.js
import * as THREE from 'three';

const canvas = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x07070a);
const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(0,1.4,3.5);

// basic lighting
const hemi = new THREE.HemisphereLight(0xffffff, 0x440000, 0.6);
scene.add(hemi);
const dir = new THREE.DirectionalLight(0xffeedd, 0.6);
dir.position.set(3,5,2);
scene.add(dir);

// instanced node lattice
const instGeom = new THREE.IcosahedronGeometry(0.08, 1);
const instMat = new THREE.MeshStandardMaterial({ color:0xffcc66, emissive:0x442200, metalness:0.1, roughness:0.7 });
const count = 180;
const inst = new THREE.InstancedMesh(instGeom, instMat, count);
const dummy = new THREE.Object3D();
for(let i=0;i<count;i++){
  const phi = Math.acos(2*Math.random()-1);
  const theta = Math.random()*Math.PI*2;
  const r = 1.2 + Math.random()*1.0;
  dummy.position.set(Math.sin(phi)*Math.cos(theta)*r, Math.cos(phi)*r*0.6-0.2, Math.sin(phi)*Math.sin(theta)*r);
  dummy.updateMatrix();
  inst.setMatrixAt(i, dummy.matrix);
}
scene.add(inst);

// fullscreen quad for slip shader
const quadGeo = new THREE.PlaneGeometry(2,2);
const slipUniforms = {
  uTime: { value: 0 },
  uIntensity: { value: 0 },
  uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
  uNoise: { value: null }
};

// load shader and create material
async function createSlipPass(){
  const res = await fetch('shaders/slip.frag');
  const frag = await res.text();
  const mat = new THREE.ShaderMaterial({
    fragmentShader: frag,
    uniforms: slipUniforms,
    depthWrite: false,
    depthTest: false,
    transparent: true
  });
  const mesh = new THREE.Mesh(quadGeo, mat);
  mesh.frustumCulled = false;
  scene.add(mesh);
}
createSlipPass();

// expose for UI
window.sliderUniforms = slipUniforms;
window.gameState = { diplomaticCollapse: 0, chaoticBranch: false };

function spawnParticleBurst(pos){
  // small visual placeholder: briefly create a sprite that fades
  const geom = new THREE.SphereGeometry(0.06, 6, 6);
  const mat = new THREE.MeshBasicMaterial({ color:0xfff1b0, transparent:true, opacity:0.9 });
  const m = new THREE.Mesh(geom, mat);
  m.position.copy(pos || new THREE.Vector3(0,0.5,0));
  scene.add(m);
  gsap.to(mat, { opacity:0, duration:1.6, onComplete:()=>scene.remove(m) });
}
window.spawnParticleBurst = spawnParticleBurst;

// resize
window.addEventListener('resize', ()=>{
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  slipUniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
});

function animate(t){
  requestAnimationFrame(animate);
  const s = t * 0.001;
  slipUniforms.uTime.value = s;
  // subtle node animation
  inst.rotation.y = Math.sin(s*0.08)*0.05;
  renderer.render(scene, camera);
}
animate();

// lightweight fetch of noise texture if present
fetch('assets/placeholder.txt').catch(()=>{});
