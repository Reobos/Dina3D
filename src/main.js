// src/main.js

import './style.css';
import '@google/model-viewer';
import { generateGlbCard } from './glb_card.js';
import header from './header.js';
import { modelData } from './glb_data.js';

const pageSize = 12;               // how many cards to load per “page”
let filteredData = [...modelData]; // the subset matching the search
let displayCount = pageSize;       // how many to render currently

const app = document.querySelector('#app');
app.innerHTML = `
  ${header}

  <!-- Search/filter input -->
  <div id="filter-container" style="margin: 1em 0; text-align: center;">
    <input
      type="text"
      id="filter-input"
      placeholder="Search by title, author, genus…"
      style="width: 80%; max-width: 400px; padding: 0.5em; font-size: 1em;"
    />
  </div>

  <!-- Grid of poster cards -->
  <div id="card-container" class="card-container"></div>

  <!-- Single detail viewer + metadata panel -->
  <div id="detail-container" style="display: none; margin-top: 2em;">
    <model-viewer
      id="detail-viewer"
      style="width: 100%; height: 500px; background-color: #ddd;"
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

// grab elements
const filterInput    = document.getElementById('filter-input');
const cardContainer  = document.getElementById('card-container');
const detailContainer = document.getElementById('detail-container');
const detailViewer    = document.getElementById('detail-viewer');
const detailTitle     = document.getElementById('detail-title');
const detailAuthor    = document.getElementById('detail-author');
const detailGenus     = document.getElementById('detail-genus');
const detailSpecies   = document.getElementById('detail-species');
const detailLinks     = document.getElementById('detail-links');

// Render the current slice of cards
function renderCards() {
  const slice = filteredData.slice(0, displayCount);
  cardContainer.innerHTML = slice.map(params => generateGlbCard(params)).join('\n');
  setupCardClicks();
}

// Attach click handlers to each card
function setupCardClicks() {
  document.querySelectorAll('.card').forEach(card => {
    card.onclick = () => {
      const params = JSON.parse(decodeURIComponent(card.dataset.params));

      // Load the model into the single viewer
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

      // Build download links
      const links = [];
      if (params.source) links.push(`<a href="${params.source}" download>GLB</a>`);
      if (params.usdz)   links.push(`<a href="${params.usdz}"   download>USDZ</a>`);
      if (params.fbx)    links.push(`<a href="${params.fbx}"    download>FBX</a>`);
      detailLinks.innerHTML = links.join(' | ');

      // Show and scroll into view
      detailContainer.style.display = 'block';
      detailViewer.scrollIntoView({ behavior: 'smooth' });
    };
  });
}

// Filter as the user types
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

// Infinite‐style “virtual scrolling”: load more when user nears bottom
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    if (displayCount < filteredData.length) {
      displayCount = Math.min(filteredData.length, displayCount + pageSize);
      renderCards();
    }
  }
});

// Initial render
renderCards();
