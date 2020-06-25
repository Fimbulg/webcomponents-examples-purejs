class HelloWorld extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        const title = document.createElement('h1')
        title.innerText = 'Hello world!'
        this.shadowRoot.appendChild(title)
        
    }
    connectedCallback() {
        // const title = document.createElement('h1')
        // title.innerText = 'Hello world!'
        // this.appendChild(title)
    }
}
if(!customElements.get('hello-world')) {
    customElements.define('hello-world', HelloWorld)
}
