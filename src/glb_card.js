// glb_card.js
export function generateGlbCard(params) {
  // we’ll serialize the whole params object into data-params
  const data = encodeURIComponent(JSON.stringify(params));

  // thumbnail uses the poster (or a fallback image)
  const thumb = params.poster
    ? `<img class="card-thumb" src="${params.poster}" alt="${params.title}">`
    : `<div class="card-thumb card-thumb--empty">${params.title}</div>`;

  // metadata lines
  const meta = [
    params.author  && `<p>by ${params.author}</p>`,
    params.genus   && `<p>Genus: ${params.genus}</p>`,
    params.species && `<p>Species: ${params.species}</p>`,
  ].filter(Boolean).join('');

  // download links
  const links = [
    `<a href="${params.source}" download>GLB</a>`,
    params.usdz && `<a href="${params.usdz}" download>USDZ</a>`,
    params.fbx  && `<a href="${params.fbx}"  download>FBX</a>`,
  ].filter(Boolean).join(' ');

  return `
    <div class="card" data-params="${data}">
      ${thumb}
      <section class="card-meta">
        <h2>${params.title}</h2>
        ${meta}
        <p class="card-links">${links}</p>
      </section>
    </div>
  `;
}
