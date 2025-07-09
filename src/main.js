import './style.css';
import '@google/model-viewer';
import { generateGlbCard } from './glb_card.js';
import header from './header.js';
import { modelData } from './glb_data.js';

const cards = modelData
  .map(params => generateGlbCard(params))
  .join('\n');

document.querySelector('#app').innerHTML = `
  ${header}
  <div class="card-container">
    ${cards}
  </div>
`;
