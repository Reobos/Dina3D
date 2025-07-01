export function generateGlbCard(params) {

    return `
    <div class="card">
        <model-viewer src="${params.source}"
                    alt="${params.description}"
                    shadow-intensity="1"
                    camera-controls
                    auto-rotate>
        </model-viewer>
        <section class="attribution">
        <span>
            <h1><a href="${params.source}" alt="download asset">${params.title}</a></h1>
            <span>${params.author}</span>
        </span>
        </section>
    </div>
    `;

}
