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

const mask_params = {
  id: "mask_FILE250630-121332F-092430F",
  preview: true,
  source: "assets/mask_FILE250630-121332F.glb",
  poster: "assets/poster_mask_FILE250630-121332F.png",
  description: "Concrete Turtle",
  title: "Concrete Turtle"
};
const mask_glb = generateGlbCard(mask_params);

const archway_params = {
  id: "archway_FILE250630-092430F",
  preview: true,
  source: "assets/archway_FILE250630-092430F.glb",
  poster: "assets/poster_archway_FILE250630-092430F.png",
  description: "Archway",
  title: "Archway"
};
const archway_glb = generateGlbCard(archway_params);

const big_brain_params = {
  id: "big-brain_P6300418",
  preview: true,
  source: "assets/big-brain_P6300418.glb",
  poster: "assets/poster_big-brain_P6300418.png",
  description: "Big Brain",
  title: "Big Brain"
};
const big_brain_glb = generateGlbCard(big_brain_params);

const block_arch_params = {
  id: "block-arch_P6300303",
  preview: true,
  source: "assets/block-arch_P6300303.glb",
  poster: "assets/poster_block-arch_P6300303.png",
  description: "Block Arch",
  title: "Block Arch"
};
const block_arch_glb = generateGlbCard(block_arch_params);

const brain_n_rocks_params = {
  id: "brain-n-rocks_FILE250630-094721F",
  preview: true,
  source: "assets/brain-n-rocks_FILE250630-094721F.glb",
  poster: "assets/poster_brain-n-rocks_FILE250630-094721F.png",
  description: "Brain 'n' Rocks",
  title: "Brain 'n' Rocks"
};
const brain_n_rocks_glb = generateGlbCard(brain_n_rocks_params);


const columnar_coral_params = {
  id: "columnar-coral_FILE250704-094129F",
  preview: true,
  source: "assets/columnar-coral_FILE250704-094129F.glb",
  poster: "assets/poster_columnar-coral_FILE250704-094129F.png",
  description: "Columnar Coral",
  title: "Columnar Coral"
};
const columnar_coral_glb = generateGlbCard(columnar_coral_params);

const coral_variety_params = {
  id: "coral-variety_GH010101",
  preview: true,
  source: "assets/coral-variety_GH010101.glb",
  poster: "assets/poster_coral-variety_GH010101.png",
  description: "Coral Variety 1",
  title: "Coral Variety 1"
};
const coral_variety_glb = generateGlbCard(coral_variety_params);


const coral_variety_2_params = {
  id: "coral-variety-2_P6300279",
  preview: true,
  source: "assets/coral-variety-2_P6300279.glb",
  poster: "assets/poster_coral-variety-2_P6300279.png",
  description: "Coral Variety 2",
  title: "Coral Variety 2"
};
const coral_variety_2_glb = generateGlbCard(coral_variety_2_params);

const cucumber_mound_params = {
  id: "cucumber-mound_FILE250630-094443F",
  preview: true,
  source: "assets/cucumber-mound_FILE250630-094443F.glb",
  poster: "assets/poster_cucumber-mound_FILE250630-094443F.png",
  description: "Cucumber Mound",
  title: "Cucumber Mound"
};
const cucumber_mound_glb = generateGlbCard(cucumber_mound_params);

const white_coral_params = {
  id: "white-coral_FILE250630-120534F",
  preview: true,
  source: "assets/white-coral_FILE250630-120534F.glb",
  poster: "assets/poster_white-coral_FILE250630-120534F.png",
  description: "White Coral",
  title: "White Coral"
};
const white_coral_glb = generateGlbCard(white_coral_params);

document.querySelector('#app').innerHTML = `
  ${header}
  <div class="card-container">
    ${white_coral_glb}
    ${cucumber_mound_glb}
    ${coral_variety_2_glb}
    ${coral_variety_glb}
    ${columnar_coral_glb}
    ${brain_n_rocks_glb}
    ${block_arch_glb}
    ${big_brain_glb}
    ${archway_glb}
    ${mask_glb}
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
