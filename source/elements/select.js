import { Component } from '../../references/quantum.js';

export class Select extends Component {
    constructor() {
        super();

        // if (event.ctrlKey) {
        //     elements.forEach(toggleSelection);
        // } else if (event.shiftKey) {
        //     // TODO: Add shift selection.
        // } else {
        //     queryAll(tree, `[${attribute}]`).forEach(deselect);
        //     elements.forEach(select);
        // }
    }

    static template = document.querySelector('#quantum-select');

    static attrbiutes = ['selected'];
}

customElements.define('quantum-select', Select);