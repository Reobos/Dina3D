import './style.css'
import '@google/model-viewer'
import { generateGlbCard } from './glb_card.js'

const params = {
  source: "assets/green-coral.glb",
  description: "Green coral captured from underwater camera at DinaCon",
  title: "Green Coral",
  author: "Jay"
};
const jay_glb = generateGlbCard(params);

document.querySelector('#app').innerHTML = `
  <div class="card-container">
    ${jay_glb}
  </div>
`
