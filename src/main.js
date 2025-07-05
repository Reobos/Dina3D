import './style.css'
import '@google/model-viewer'
import { generateGlbCard } from './glb_card.js'
import header from './header.js'

const bell_params = {
  id: "bell",
  preview: true,
  source: "assets/bell.glb",
  poster: "assets/poster_bell.png",
  description: "Bell",
  title: "Bell",
  usdz: "assets/bell.usdz",
};
const bell_glb = generateGlbCard(bell_params);

const small_coral_params = {
  id: "small_coral",
  preview: true,
  source: "assets/small_coral.glb",
  poster: "assets/poster_small_coral.png",
  description: "Small Coral",
  title: "Small Coral",
  usdz: "assets/small_coral.usdz",
};
const small_coral_glb = generateGlbCard(small_coral_params);

const beautiful_params = {
  id: "beautiful",
  preview: true,
  source: "assets/beautiful.glb",
  poster: "assets/poster_beautiful.png",
  description: "Beautiful",
  title: "Beautiful"
};
const beautiful_glb = generateGlbCard(beautiful_params);

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
  poster: "assets/poster-baby_coral.png",
  description: "Baby coral",
  title: "Baby Coral"
};
const baby_coral_glb = generateGlbCard(baby_coral_params);

const bumps_params = {
  id: "bumps",
  source: "assets/bumps.glb",
  poster: "assets/poster-bumps.png",
  description: "Bumps",
  title: "Bumps"
};
const bumps_glb = generateGlbCard(bumps_params);

const formation_params = {
  id: "formation",
  source: "assets/formation.glb",
  poster: "assets/poster-formation.png",
  description: "Formations",
  title: "Formations"
};
const formation_glb = generateGlbCard(formation_params);

const green_coral_params = {
  id: "green-coral",
  source: "assets/green-coral.glb",
  poster: "assets/poster_green_coral.png",
  description: "Green coral captured from underwater camera at DinaCon",
  title: "Green Coral",
  author: "Jay"
};
const green_coral_glb = generateGlbCard(green_coral_params);

const statue_params = {
  id: "statue",
  source: "assets/statue.glb",
  poster: "assets/poster-statue.png",
  description: "Statue",
  title: "Statue"
};
const statue_glb = generateGlbCard(statue_params);

const tendrils_params = {
  id: "tendrils",
  source: "assets/tendrils.glb",
  poster: "assets/poster-tendrils.png",
  description: "Tendrils",
  title: "Tendrils"
};
const tendrils_glb = generateGlbCard(tendrils_params);

const boule_params = {
  id: "boule",
  source: "assets/boule.glb",
  poster: "assets/poster-boule.png",
  description: "Boule",
  title: "Boule"
};
const boule_glb = generateGlbCard(boule_params);

const offering_params = {
  id: "offering",
  source: "assets/offering.glb",
  poster: "assets/poster-offering.png",
  description: "Offering",
  title: "Offering",
  author: "Camilla"
};
const offering_glb = generateGlbCard(offering_params);

document.querySelector('#app').innerHTML = `
  ${header}
  <div class="card-container">
    ${small_coral_glb}
    ${green_coral_glb}
    ${bell_glb}
    ${beautiful_glb}
    ${fish_house_glb}
    ${tendrils_glb}
    ${offering_glb}
    ${baby_coral_glb}
    ${bumps_glb}
    ${boule_glb}
    ${formation_glb}
    ${statue_glb}
  </div>
`
