import './style.css';
import '@google/model-viewer';
import { generateGlbCard } from './glb_card.js';
import header from './header.js';
import { modelData } from './glb_data.js';

// 1) render all posters
const cards = modelData.map(params => generateGlbCard(params)).join('\n');
document.querySelector('#app').innerHTML = `
  ${header}
  <div class="card-container">
    ${cards}
  </div>

  <!-- single detail viewer -->
  <div id="detail-container" style="display:none; margin-top:2em;">
    <model-viewer
      id="detail-viewer"
      style="width:100%; height:500px; background-color:#ddd"
      shadow-intensity="1"
      camera-controls
      auto-rotate>
    </model-viewer>
  </div>
`;

// 2) wire up clicks
const detailContainer = document.getElementById('detail-container');
const detailViewer   = document.getElementById('detail-viewer');

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    // parse that JSON-packed params
    const params = JSON.parse(decodeURIComponent(card.dataset.params));

    // update the detail viewer
    detailViewer.src = params.source;
    if (params.usdz) detailViewer.setAttribute('ios-src', params.usdz);
    detailViewer.removeAttribute('poster');

    // show it
    detailContainer.style.display = 'block';
    detailViewer.scrollIntoView({ behavior: 'smooth' });
  });
});
