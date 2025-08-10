// src/main.js

import "./style.css";
import "@google/model-viewer";
import { generateGlbCard, showGlbCard, hideGlbCard } from "./glb_card.js";
import header from "./header.js";
import { modelData } from "./glb_data.js";

let filteredData = [...modelData]; // the subset matching the search

const app = document.querySelector("#app");
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
`;

// grab elements
const filterInput = document.getElementById("filter-input");
const cardContainer = document.getElementById("card-container");

function renderAllCards() {
  cardContainer.innerHTML = modelData
    .map((params) => generateGlbCard(params))
    .join("\n");
}

// Render the current slice of cards
function renderFilteredCards() {
  modelData.forEach((params) => hideGlbCard(params));
  filteredData.forEach((params) => showGlbCard(params));
}

// Filter as the user types
filterInput.addEventListener("input", () => {
  const q = filterInput.value.trim().toLowerCase();
  filteredData = modelData.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      (p.author || "").toLowerCase().includes(q) ||
      (p.genus || "").toLowerCase().includes(q)
  );
  renderFilteredCards();
});

// Initial render
renderAllCards();
