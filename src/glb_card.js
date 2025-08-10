export function generateGlbCard(params) {
  // we’ll serialize the whole params object into data-params
  const data = encodeURIComponent(JSON.stringify(params));

  const posterAttr = params.poster ? `poster="${params.poster}"` : "";
  const usdzAttr = params.usdz ? `ar ios-src="${params.usdz}"` : "";
  const preview = params.preview ? `` : 'reveal="manual"';

  // metadata lines
  const meta = [
    params.author && `<p>by ${params.author}</p>`,
    params.genus && `<p>Genus: ${params.genus}</p>`,
    params.species && `<p>Species: ${params.species}</p>`,
  ]
    .filter(Boolean)
    .join("");

  // download links
  const links = [
    `<a href="${params.source}" download>GLB</a>`,
    params.usdz && `<a href="${params.usdz}" download>USDZ</a>`,
    params.fbx && `<a href="${params.fbx}"  download>FBX</a>`,
  ]
    .filter(Boolean)
    .join(" ");

  const poster_placeholder = params.preview
    ? ""
    : `<img class="img-poster" src="${params.poster}" slot="poster"></img>`;

  const button_id = `${params.id}-button-load`;
  const reveal_button = params.preview
    ? ""
    : `<button id="${button_id}" class="reveal-button" slot="poster">Preview 3D Model</button>`;

  const button_selector = `#${button_id}`;
  const doc_selector = `#${params.id}`;
  document.addEventListener("DOMContentLoaded", () => {
    const button_elem = document.querySelector(button_selector);
    button_elem.addEventListener("click", () => {
      button_elem.innerHTML = "Loading...";
      return document.querySelector(doc_selector).dismissPoster();
    });
  });

  return `
    <div class="card" data-params="${data}">
      <model-viewer
          id="${params.id}"
          src="${params.source}"
          alt="${params.description}"
          ${preview}
          ${posterAttr}
          ${usdzAttr}
          shadow-intensity="1"
          camera-controls
          auto-rotate>
          ${poster_placeholder}
          ${reveal_button}
      </model-viewer>
      <section class="card-meta">
        <h2>${params.title}</h2>
        ${meta}
        <p class="card-links">${links}</p>
      </section>
    </div>
    `;
}

export function hideGlbCard(params)
{
  const card = document.querySelector(`#${params.id}`)?.closest('.card');
  if (card) {
    card.style.display = 'none';
  }
}

export function showGlbCard(params)
{
  const card = document.querySelector(`#${params.id}`)?.closest('.card');
  if (card) {
    card.style.display = '';
  }
}