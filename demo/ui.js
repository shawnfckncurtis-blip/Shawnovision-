// demo/ui.js
import gsap from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js';

const logEl = document.getElementById('log');
fetch('../assets/dialogue/saint_roch_log.md')
  .then(r=>r.text())
  .then(t=>{ logEl.textContent = t; })
  .catch(()=>{ logEl.textContent = 'Saint‑Roch log unavailable.'; });

const btnDrop = document.getElementById('btn-drop');
btnDrop.addEventListener('click', onDrop);

function onDrop(){
  const uniforms = window.sliderUniforms;
  if(!uniforms) return;
  // ramp intensity
  gsap.to(uniforms.uIntensity, { value: 1.5, duration: 1.2, ease: 'power2.out' });
  // spawn particle burst at center
  window.spawnParticleBurst(new THREE.Vector3(0,0.6,0));
  // set game state
  window.gameState.diplomaticCollapse += 25;
  window.gameState.chaoticBranch = true;
  // visual overlay
  showIdentityShiftOverlay();
}

function showIdentityShiftOverlay(){
  const overlay = document.getElementById('overlay');
  overlay.style.pointerEvents = 'none';
  overlay.innerHTML = '<div style="position:absolute;inset:0;background:radial-gradient(circle at 30% 40%, rgba(255,208,128,0.06), transparent 20%), linear-gradient(180deg, rgba(220,120,40,0.02), transparent); mix-blend-mode:screen;"></div>';
  overlay.style.transition = 'opacity 1.8s ease-out';
  overlay.style.opacity = '1';
  setTimeout(()=>{ overlay.style.opacity = '0'; setTimeout(()=>overlay.innerHTML='', 1200); }, 1600);
}
