// src/main.js

import './style.css';
import '@google/model-viewer';
import { generateGlbCard } from './glb_card.js';
import header from './header.js';
import { modelData } from './glb_data.js';

// Render all the poster cards
const cards = modelData.map(params => generateGlbCard(params)).join('\n');

document.querySelector('#app').innerHTML = `
  ${header}
  <div class="card-container">
    ${cards}
  </div>

  <!-- single detail viewer + metadata -->
  <div id="detail-container" style="display: none; margin-top: 2em;">
    <model-viewer
      id="detail-viewer"
      style="width: 100%; height: 500px; background-color: #ddd"
      shadow-intensity="1"
      camera-controls
      auto-rotate>
    </model-viewer>
    <section id="detail-meta" style="margin-top: 1em; text-align: left;">
      <h2 id="detail-title"></h2>
      <p id="detail-author"></p>
      <p id="detail-genus"></p>
      <p id="detail-species"></p>
      <p id="detail-links"></p>
    </section>
  </div>
`;

// Grab references to the detail-view elements
const detailContainer = document.getElementById('detail-container');
const detailViewer    = document.getElementById('detail-viewer');
const detailTitle     = document.getElementById('detail-title');
const detailAuthor    = document.getElementById('detail-author');
const detailGenus     = document.getElementById('detail-genus');
const detailSpecies   = document.getElementById('detail-species');
const detailLinks     = document.getElementById('detail-links');

// Wire up each card to load into the single detail-viewer on click
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const params = JSON.parse(decodeURIComponent(card.dataset.params));

    // Load the 3D model
    detailViewer.src = params.source;
    detailViewer.removeAttribute('poster');
    if (params.usdz) {
      detailViewer.setAttribute('ios-src', params.usdz);
    } else {
      detailViewer.removeAttribute('ios-src');
    }

    // Populate metadata
    detailTitle.textContent   = params.title   || '';
    detailAuthor.textContent  = params.author  ? `by ${params.author}` : '';
    detailGenus.textContent   = params.genus   ? `Genus: ${params.genus}`   : '';
    detailSpecies.textContent = params.species ? `Species: ${params.species}` : '';

    // Build download links (GLB always, USDZ/FBX if present)
    const links = [];
    if (params.source) links.push(`<a href="${params.source}" download>GLB</a>`);
    if (params.usdz)   links.push(`<a href="${params.usdz}"   download>USDZ</a>`);
    if (params.fbx)    links.push(`<a href="${params.fbx}"    download>FBX</a>`);
    detailLinks.innerHTML = links.join(' | ');

    // Show the detail viewer and scroll into view
    detailContainer.style.display = 'block';
    detailViewer.scrollIntoView({ behavior: 'smooth' });
  });
});
