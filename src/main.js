import './style.css'
import '@google/model-viewer'
import { generateGlbCard } from './glb_card.js'
import header from './header.js'

const jay_params = {
  id: "green-coral",
  source: "assets/green-coral.glb",
  poster: "assets/poster_green_coral.png",
  description: "Green coral captured from underwater camera at DinaCon",
  title: "Green Coral",
  author: "Jay"
};
const jay_glb = generateGlbCard(jay_params);

const fish_house_params = {
  id: "fish-house",
  source: "assets/fish-house.glb",
  poster: "assets/poster_fish_house.png",
  description: "Mound for coral restoration and a home for fishies",
  title: "Fish House",
  author: "Grace"
};
const fish_house_glb = generateGlbCard(fish_house_params);

const baby_coral_params = {
  id: "baby_coral",
  source: "assets/baby_coral.glb",
  poster: "assets/poster_baby_coral.png",
  description: "Baby coral",
  title: "Baby Coral"
};
const baby_coral_glb = generateGlbCard(baby_coral_params);

const bumps_params = {
  id: "bumps",
  source: "assets/bumps.glb",
  poster: "assets/poster_bumps.png",
  description: "Bumps",
  title: "Bumps"
};
const bumps_glb = generateGlbCard(bumps_params);

const formation_params = {
  id: "formation",
  source: "assets/formation.glb",
  poster: "assets/poster_formation.png",
  description: "Formations",
  title: "Formations"
};
const formation_glb = generateGlbCard(formation_params);

const statue_params = {
  id: "statue",
  source: "assets/statue.glb",
  poster: "assets/poster_statue.png",
  description: "Statue",
  title: "Statue"
};
const statue_glb = generateGlbCard(statue_params);

const tendrils_params = {
  id: "tendrils",
  source: "assets/tendrils.glb",
  poster: "assets/poster_tendrils.png",
  description: "Tendrils",
  title: "Tendrils"
};
const tendrils_glb = generateGlbCard(tendrils_params);

const beautiful_params = {
  id: "beautiful",
  source: "assets/beautiful.glb",
  poster: "assets/poster_beautiful.png",
  description: "Beautiful",
  title: "Beautiful"
};
const beautiful_glb = generateGlbCard(beautiful_params);

const boule_params = {
  id: "boule",
  source: "assets/boule.glb",
  poster: "assets/poster_boule.png",
  description: "Boule",
  title: "Boule"
};
const boule_glb = generateGlbCard(boule_params);

document.querySelector('#app').innerHTML = `
  ${header}
  <div class="card-container">
    ${jay_glb}
    ${tendrils_glb}
    ${fish_house_glb}
    ${beautiful_glb}
    ${baby_coral_glb}
    ${bumps_glb}
    ${boule_glb}
    ${formation_glb}
    ${statue_glb}
  </div>
`
