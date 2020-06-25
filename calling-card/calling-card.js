class CallingCard extends HTMLElement {
    constructor() {
        super();
        this.nameContainer = document.createElement('h3');
        this.nameContainer.innerText = 'John Doe';
        this.numberContainer = document.createElement('p');
        this.numberContainer.innerText = '0101101010101'
        
        
    }
    connectedCallback() {
        this.cardContainer = document.createElement('div')
        this.cardContainer.style.borderRadius = '3px';
        this.cardContainer.style.backgroundColor = 'black';
        this.cardContainer.style.width = '300px';
        this.cardContainer.style.height = '200px';
        this.cardContainer.style.display = 'flex';
        this.cardContainer.style.flexDirection = 'column'
        this.cardContainer.style.justifyContent = 'center';
        this.cardContainer.style.alignItems = 'center';
        
        
        this.nameContainer.style.textAlign = 'center'
        this.nameContainer.style.minWidth = '200px'
        this.nameContainer.style.padding = '0.5rem';
        this.nameContainer.style.borderRadius = '2px';
        this.nameContainer.style.color = 'white';
        this.nameContainer.style.backgroundColor = 'transparent';
        this.nameContainer.style.border = 'solid white 2px';
        
        this.numberContainer.style.color = 'white';
        this.numberContainer.style.textAlign = 'center'
        this.numberContainer.style.margin = '0.25rem';

        this.cardContainer.appendChild(this.nameContainer);
        this.cardContainer.appendChild(this.numberContainer);
        this.appendChild(this.cardContainer);

    }
    set name(newName) {
        this.setAttribute('name', newName);
    }
    get name() {
        return this.getAttribute('name');
    }
    set number(newNumber) {
        this.setAttribute('number', newNumber);
    }
    get number() {
        return this.getAttribute('number');
    }
    static get observedAttributes() {
        return ['number', 'name']
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'name') {                        
            this.nameContainer.innerText = this.name;
        } else if (name === 'number') {
            this.numberContainer.innerText = this.number
        }
    }   

}
if(!customElements.get('calling-card')) {
    customElements.define('calling-card', CallingCard)
}