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

const big_gulp_coral_params = {
  id: "big_gulp_coral",
  preview: true,
  source: "assets/big_gulp_coral.glb",
  poster: "assets/poster_big_gulp_coral.png",
  description: "Big Gulp Coral",
  title: "Big Gulp Coral"
};
const big_gulp_coral_glb = generateGlbCard(big_gulp_coral_params);

const big_gulp_nearby_rocks_params = {
  id: "big_gulp_nearby_rocks",
  preview: true,
  source: "assets/big_gulp_nearby_rocks.glb",
  poster: "assets/poster_big_gulp_nearby_rocks.png",
  description: "Big Gulp Rocks",
  title: "Big Gulp Rocks"
};
const big_gulp_nearby_rocks_glb = generateGlbCard(big_gulp_nearby_rocks_params);

const coral_cliff_params = {
  id: "coral_cliff",
  preview: true,
  source: "assets/coral_cliff.glb",
  poster: "assets/poster_coral_cliff.png",
  description: "Coral Cliff",
  title: "Coral Cliff"
};
const coral_cliff_glb = generateGlbCard(coral_cliff_params);

const knobble_hog_coral_params = {
  id: "knobble_hog_coral",
  preview: true,
  source: "assets/knobble_hog_coral.glb",
  poster: "assets/poster_knobble_hog_coral.png",
  description: "Knobble Hog",
  title: "Knobble Hog"
};
const knobble_hog_coral_glb = generateGlbCard(knobble_hog_coral_params);

const knobble_hog_nearby_params = {
  id: "knobble_hog_nearby",
  preview: true,
  source: "assets/knobble_hog_nearby.glb",
  poster: "assets/poster_knobble_hog_nearby.png",
  description: "Knobble Nearby",
  title: "Knobble Nearby"
};
const knobble_hog_nearby_glb = generateGlbCard(knobble_hog_nearby_params);

const pork_belly_baby_params = {
  id: "pork_belly_baby",
  preview: true,
  source: "assets/pork_belly_baby.glb",
  poster: "assets/poster_pork_belly_baby.png",
  description: "Pork Belly Baby",
  title: "Pork Belly Baby"
};
const pork_belly_baby_glb = generateGlbCard(pork_belly_baby_params);

const table_params = {
  id: "table",
  preview: true,
  source: "assets/table.glb",
  poster: "assets/poster_table.png",
  description: "Table",
  title: "Table"
};
const table_glb = generateGlbCard(table_params);

const tables_near_buoy_params = {
  id: "tables_near_buoy",
  preview: true,
  source: "assets/tables_near_buoy.glb",
  poster: "assets/poster_tables_near_buoy.png",
  description: "Tables Near Buoy",
  title: "Tables Near Buoy"
};
const tables_near_buoy_glb = generateGlbCard(tables_near_buoy_params);

document.querySelector('#app').innerHTML = `
  ${header}
  <div class="card-container">
    ${small_coral_glb}
    ${green_coral_glb}
    ${bell_glb}
    ${beautiful_glb}
    ${big_gulp_coral_glb}
    ${big_gulp_nearby_rocks_glb}
    ${coral_cliff_glb}
    ${knobble_hog_coral_glb}
    ${knobble_hog_nearby_glb}
    ${pork_belly_baby_glb}
    ${table_glb}
    ${tables_near_buoy_glb}
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
