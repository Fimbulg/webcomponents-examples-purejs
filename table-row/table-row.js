class TableRow extends HTMLTableRowElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `<td>Glenn</td><td>Bruno</td><td>@GB</td>`
    }
}
if(!customElements.get('table-row')) {
    customElements.define('table-row', TableRow, {extends: 'tr'})
}
