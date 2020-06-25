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
    connectedCallback() {
        const templateSelector = document.getElementById('template-selector');
        templateSelector.addEventListener('change', (event) => {
            const valueSelected = event.target.value;
            this.layout = valueSelected;
        });
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