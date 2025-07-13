// src/main.js

import './style.css';
import '@google/model-viewer';
import { generateGlbCard } from './glb_card.js';
import header from './header.js';
import { modelData } from './glb_data.js';

const pageSize     = 12;
let filteredData   = [...modelData];
let displayCount   = pageSize;

// Demo state
let demoTimer      = null;
let demoIndex      = 0;
let animRaf        = null;
let startTime      = 0;
let demoBaseTheta  = 0;
let demoBasePhi    = 0;
let demoBaseRadius = 0;

// Build the UI
const app = document.querySelector('#app');
app.innerHTML = `
  ${header}
  <div id="filter-container" style="margin:1em 0; text-align:center;">
    <input
      id="filter-input"
      type="text"
      placeholder="Search by title, author, genus…"
      style="width:80%; max-width:400px; padding:0.5em; font-size:1em;"
    />
    <button id="demo-toggle" style="margin-left:1em;">Start Demo</button>
  </div>

  <div id="card-container" class="card-container"></div>

  <div id="detail-container" class="full-width" style="margin-top:2em; display:none;">
    <model-viewer
      id="detail-viewer"
      style="width:100%; height:500px; background-color:#ddd"
      shadow-intensity="1"
      min-camera-orbit="auto auto 1.5m"
      max-camera-orbit="auto auto 4m">
    </model-viewer>
    <section id="detail-meta" style="margin:1em; text-align:left;">
      <h2 id="detail-title"></h2>
      <p id="detail-author"></p>
      <p id="detail-genus"></p>
      <p id="detail-species"></p>
      <p id="detail-links"></p>
    </section>
  </div>
`;

const filterInput     = document.getElementById('filter-input');
const demoButton      = document.getElementById('demo-toggle');
const cardContainer   = document.getElementById('card-container');
const detailContainer = document.getElementById('detail-container');
const detailViewer    = document.getElementById('detail-viewer');
const detailTitle     = document.getElementById('detail-title');
const detailAuthor    = document.getElementById('detail-author');
const detailGenus     = document.getElementById('detail-genus');
const detailSpecies   = document.getElementById('detail-species');
const detailLinks     = document.getElementById('detail-links');

// Show a model + metadata
function showDetail(params) {
  detailViewer.src = params.source;
  detailViewer.removeAttribute('poster');
  if (params.usdz)   detailViewer.setAttribute('ios-src', params.usdz);
  else               detailViewer.removeAttribute('ios-src');

  detailTitle.textContent   = params.title   || '';
  detailAuthor.textContent  = params.author  ? `by ${params.author}` : '';
  detailGenus.textContent   = params.genus   ? `Genus: ${params.genus}`   : '';
  detailSpecies.textContent = params.species ? `Species: ${params.species}` : '';

  const links = [];
  if (params.source) links.push(`<a href="${params.source}" download>GLB</a>`);
  if (params.usdz)   links.push(`<a href="${params.usdz}"   download>USDZ</a>`);
  if (params.fbx)    links.push(`<a href="${params.fbx}"    download>FBX</a>`);
  detailLinks.innerHTML = links.join(' | ');

  detailContainer.style.display = 'block';
}

// Animate camera orbit: constant spin + in/out dolly
function animateDemo(ts) {
  if (!startTime) startTime = ts;
  const elapsed = (ts - startTime) / 1000;   // seconds since demo start

  // tweak these:
  const rotateSpeed = 0.2;   // radians per second
  const cycleTime   = 20;    // seconds for one full in/out
  const dollyAmp    = 2.0;   // meters amplitude

  // compute new angle & radius
  const theta  = demoBaseTheta + rotateSpeed * elapsed;
  const cycleT = (elapsed % cycleTime) / cycleTime;
  const radius = demoBaseRadius + dollyAmp * Math.sin(2 * Math.PI * cycleT);

  detailViewer.cameraOrbit =
    `${theta.toFixed(3)}rad ${demoBasePhi.toFixed(3)}rad ${radius.toFixed(3)}m`;

  animRaf = requestAnimationFrame(animateDemo);
}

function startCustomDemo() {
  // capture the base orbit once
  const orbit = detailViewer.getCameraOrbit();
  demoBaseTheta  = orbit.theta;
  demoBasePhi    = orbit.phi;
  demoBaseRadius = orbit.radius;

  // reset timer
  if (animRaf) cancelAnimationFrame(animRaf);
  startTime = 0;
  animRaf   = requestAnimationFrame(animateDemo);
}

function stopCustomDemo() {
  if (animRaf) cancelAnimationFrame(animRaf);
  animRaf = null;
}

// Render poster cards
function renderCards() {
  cardContainer.innerHTML =
    filteredData.slice(0, displayCount)
      .map(params => generateGlbCard(params))
      .join('\n');
  setupCardClicks();
}

// Attach click to each card
function setupCardClicks() {
  document.querySelectorAll('.card').forEach(card => {
    card.onclick = () => {
      if (demoTimer) {
        clearInterval(demoTimer);
        stopCustomDemo();
        document.body.classList.remove('demo-mode');
        demoTimer = null;
        demoButton.textContent = 'Start Demo';
      }
      const params = JSON.parse(decodeURIComponent(card.dataset.params));
      showDetail(params);
      detailViewer.scrollIntoView({ behavior: 'smooth' });
    };
  });
}

// Filter as you type
filterInput.addEventListener('input', () => {
  const q = filterInput.value.trim().toLowerCase();
  filteredData = modelData.filter(p =>
    p.title.toLowerCase().includes(q) ||
    (p.author || '').toLowerCase().includes(q) ||
    (p.genus  || '').toLowerCase().includes(q)
  );
  displayCount = pageSize;
  renderCards();
});

// Infinite scroll: load more when near bottom
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
      displayCount < filteredData.length) {
    displayCount = Math.min(filteredData.length, displayCount + pageSize);
    renderCards();
  }
});

// Demo-mode toggle
demoButton.addEventListener('click', () => {
  if (demoTimer) {
    // Stop demo
    clearInterval(demoTimer);
    stopCustomDemo();
    document.body.classList.remove('demo-mode');
    detailContainer.style.display = 'none';
    demoTimer = null;
    demoButton.textContent = 'Start Demo';
  } else {
    // Start demo
    document.body.classList.add('demo-mode');
    demoIndex = 0;
    showDetail(filteredData[demoIndex]);
    startCustomDemo();
    detailViewer.scrollIntoView({ behavior: 'smooth' });
    demoButton.textContent = 'Stop Demo';

    demoTimer = setInterval(() => {
      demoIndex = (demoIndex + 1) % filteredData.length;
      showDetail(filteredData[demoIndex]);
      stopCustomDemo();
      startCustomDemo();
    }, 30000);
  }
});

// Initial render
renderCards();
