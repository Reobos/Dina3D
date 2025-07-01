import './style.css'
import '@google/model-viewer'
import { generateGlbCard } from './glb_card.js'

const jay_params = {
  source: "assets/green-coral.glb",
  description: "Green coral captured from underwater camera at DinaCon",
  title: "Green Coral",
  author: "Jay"
};
const jay_glb = generateGlbCard(jay_params);

const fish_house_params = {
  source: "assets/fish-house.glb",
  description: "Mound for coral restoration and a home for fishies",
  title: "Fish House",
  author: "Grace"
};
const fish_house_glb = generateGlbCard(fish_house_params);

document.querySelector('#app').innerHTML = `
  <div class="card-container">
    ${jay_glb}
    ${fish_house_glb}
  </div>
`
