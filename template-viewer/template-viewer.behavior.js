const templateSelector = document.getElementById('template-selector');
const templateViewer = document.querySelector('template-viewer');
templateViewer.layout = "first"
templateSelector.addEventListener('change', (event) => {
    const valueSelected = event.target.value;
    templateViewer.layout = valueSelected;
});