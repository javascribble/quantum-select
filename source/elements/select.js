import html from '../templates/select.js';

export class Select extends quantum.Component {
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

    static template = quantum.template(html);

    static get observedAttributes() { return ['selected']; }
}

quantum.define('quantum-select', Select);