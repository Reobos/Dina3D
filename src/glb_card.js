export function generateGlbCard(params) {
    const posterAttr = params.poster ? `poster="${params.poster}"` : '';
    const usdzAttr = params.usdz ? `ar ios-src="${params.usdz}"` : '';
    const author = params.author ? `<span>by ${params.author}</span>` : '';

    return `
    <div class="card">
        <model-viewer
            id="${params.id}"
            src="${params.source}"
            alt="${params.description}"
            ${posterAttr}
            ${usdzAttr}
            shadow-intensity="1"
            camera-controls
            auto-rotate>
        </model-viewer>
        <section class="attribution">
        <span>
            <h1><a href="${params.source}" alt="download asset">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" fill="currentColor" viewBox="0 0 20 20" style="vertical-align:middle;margin-right:6px;">
                <path d="M10 2a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L9 11.586V3a1 1 0 0 1 1-1zm-7 13a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"/>
            </svg>
            ${params.title}
            </a></h1>
            ${author}
        </span>
        </section>
    </div>
    `;
}
