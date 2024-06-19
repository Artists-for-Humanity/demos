const svgContainer = document.getElementById('svgContainer');
const svg = svgContainer.querySelector('svg');

let scale = 1;
const zoomFactor = 0.1;

let isDragging = false;
let startX, startY;
let translateX = 0, translateY = 0;

svgContainer.addEventListener('wheel', (event) => {
    event.preventDefault();

    const rect = svgContainer.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    const delta = Math.sign(event.deltaY) * zoomFactor;
    const newScale = Math.max(0.1, scale - delta);

    const containerCenterX = rect.width / 2;
    const containerCenterY = rect.height / 2;

    const contentCenterX = (offsetX - translateX) / scale;
    const contentCenterY = (offsetY - translateY) / scale;

    translateX += (containerCenterX - contentCenterX) * (1 - newScale / scale);
    translateY += (containerCenterY - contentCenterY) * (1 - newScale / scale);

    svg.style.transform = `scale(${newScale}) translate(${translateX}px, ${translateY}px)`;

    scale = newScale;
});

svgContainer.addEventListener('mousedown', (event) => {
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
    svgContainer.classList.add('grabbing');
});

window.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const dx = event.clientX - startX;
        const dy = event.clientY - startY;

        translateX += dx / scale;
        translateY += dy / scale;

        svg.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;

        startX = event.clientX;
        startY = event.clientY;
    }
});

window.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        svgContainer.classList.remove('grabbing');
    }
});
