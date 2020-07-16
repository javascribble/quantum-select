import { Component, template } from '../../references/quantum.js';
import html from '../templates/select.js';

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

    static template = template(html);

    static attrbiutes = ['selected'];
}

customElements.define('quantum-select', Select);