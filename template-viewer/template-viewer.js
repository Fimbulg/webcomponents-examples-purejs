class TemplateViewer extends HTMLElement {
    static get observedAttributes() {
        return ['layout'];
    }

    get layout() {
        return this.getAttribute('layout');
    }

    set layout(value) {
        this.setAttribute('layout', value);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'layout') {
        this.innerHTML = '';
        const template = document.getElementById(newValue);
        const clone = template.content;
        this.appendChild(clone);
        }
    }
}
if (!customElements.get('template-viewer')) {
    customElements.define('template-viewer', TemplateViewer);
}